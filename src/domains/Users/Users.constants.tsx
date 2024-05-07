import { ColumnsType } from "antd/es/table";
import { Dob, Location, User } from "../../api/hooks/users.types";
import { Avatar, Flex } from "antd";
import { spacing } from "@/styles/spacings";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { dateFormat } from "@/common/utils/dateFormat.utils";
import { IconWrapper, RowWrapper } from "./Users.styles";
import { LightText, BoldText } from "@/common/components/Typography/Typography";

export const userColumns: ColumnsType<User> = [
  {
    title: "User",
    dataIndex: "userIdenifier",
    key: "userIdenifier",
    ellipsis: true,
    width: 200,
    render: (_, record: User) => {
      const {
        name: { title, first, last },
        picture,
        email,
      } = record;
      return (
        <Flex>
          <IconWrapper>
            <Avatar src={picture.thumbnail} />
          </IconWrapper>
          <div>
            <BoldText>
              {title} {first} {last}
            </BoldText>
            <LightText>{email}</LightText>
          </div>
        </Flex>
      );
    },
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    ellipsis: true,
    width: 100,
    render: (location: Location) => {
      const { city, state } = location;
      return (
        <RowWrapper>
          <IconWrapper>
            <EnvironmentOutlined />
          </IconWrapper>
          <div>
            {city}, <LightText>{state}</LightText>
          </div>
        </RowWrapper>
      );
    },
  },
  {
    title: "DOB",
    dataIndex: "dob",
    key: "dob",
    ellipsis: true,
    width: 100,
    render: (dob: Dob) => {
      const { age, date } = dob;
      return (
        <RowWrapper>
          <IconWrapper>
            <CalendarOutlined />
          </IconWrapper>
          <div>
            <span style={{ marginRight: spacing.S4 }}>{dateFormat(date)}</span>
            <LightText>(Age {age})</LightText>
          </div>
        </RowWrapper>
      );
    },
  },
  {
    title: "Telephone",
    dataIndex: "telephone",
    key: "telephone",
    width: 100,
    render: (_, record) => {
      const { cell, phone } = record;
      return (
        <RowWrapper
          style={{
            alignItems: "center",
          }}
        >
          <IconWrapper>
            <PhoneOutlined />
          </IconWrapper>
          <div>
            <div>
              {cell} <LightText>(m)</LightText>{" "}
            </div>
            <div>
              {phone} <LightText>(p)</LightText>
            </div>
          </div>
        </RowWrapper>
      );
    },
  },
  {
    title: "Registered",
    dataIndex: "registered",
    key: "registered",
    ellipsis: true,
    width: 100,
    render: (dob: Dob) => {
      const { age, date } = dob;
      return (
        <RowWrapper>
          <IconWrapper>
            <CalendarOutlined />
          </IconWrapper>
          <div>
            <span style={{ marginRight: spacing.S4 }}>{dateFormat(date)}</span>
            <LightText>({age} years ago)</LightText>
          </div>
        </RowWrapper>
      );
    },
  },
];
