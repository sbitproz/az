interface GlobalVars {
  BASEURL: string;
  TOTAL_RECORD_COUNT: number;
  NOTIFICATION_DURATION: number;
}

const DEFAULT_ENV = {
  TOTAL_RECORD_COUNT: 500,
  NOTIFICATION_DURATION: 10,
};

type OriginVars = {
  [Property in keyof GlobalVars as `VITE_${Capitalize<Property>}`]: string;
};

const numberDefinedOrDefault = (value: string, defaultValue: number): number =>
  typeof +value === "number" && !isNaN(+value) ? +value : defaultValue;

export const defaultPollingRate = 10_000;

const loadEnvVars = (): GlobalVars => {
  const { VITE_BASEURL, VITE_TOTAL_RECORD_COUNT, VITE_NOTIFICATION_DURATION } =
    import.meta.env as unknown as OriginVars;

  return {
    BASEURL: VITE_BASEURL,
    TOTAL_RECORD_COUNT: numberDefinedOrDefault(
      VITE_TOTAL_RECORD_COUNT,
      DEFAULT_ENV.TOTAL_RECORD_COUNT
    ),
    NOTIFICATION_DURATION: numberDefinedOrDefault(
      VITE_NOTIFICATION_DURATION,
      DEFAULT_ENV.NOTIFICATION_DURATION
    ),
  };
};

export const globalEnv = loadEnvVars();
