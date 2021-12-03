export interface user {
  _id: string;
  avatarUrl: string;
  isAudit: boolean;
  nickName: string;
}
export interface location {
  longitude: number;
  latitude: number;
};

export interface lab {
  name: string;
  locations: location[];
  range: number;
}
