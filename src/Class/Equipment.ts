export type EquipmentType = 'WEP' | 'ARM' | 'ACC';

import equipment_json from '@/assets/json/Equipment.json';

export default class Equipment {
  eqp_id: number;
  type: string;
  kind: string;
  attribute:number;
  name: string;
  status: { [key: string]: number };

  constructor(data: any) {
    this.eqp_id = data.eqp_id;
    this.type = data.type;
    this.kind = data.kind;
    this.attribute = data.attribute;
    this.name = data.name;
    this.status = data.status;
  }
}

export const equipmentList = equipment_json.map((equipmentData: any) => new Equipment(equipmentData))