interface user {
  _id: string;
  avatarUrl: string;
  isAudit: boolean;
  nickName: string;
}
interface location {
  longitude: number;
  latitude: number;
}

interface lab {
  name: string;
  locations: location[];
  range: number;
}
