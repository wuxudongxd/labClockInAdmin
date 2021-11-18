export interface user {
  _id: string;
  avatarUrl: string;
  isAudit: boolean;
  nickName: string;
}

export interface lab {
  name: string;
  locations: [latitude: string, longitude: string][];
}
