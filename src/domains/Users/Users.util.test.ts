import { getRowKey } from "./Users.util"
import { mockUser } from "./__mocks__/mockUser"

describe('Users.util', () => {
  it('getRowKey', () => {
    const key = getRowKey(mockUser);
    
    expect(key).toBe('SSN-780-89-7852');
  })
})