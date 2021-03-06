export enum SlotStatus {
  FREE = 'FREE',
  OCCUPIED = 'OCCUPIED',
  SOLD = 'SOLD',
}

export interface ISlot {
  bizItemId: string
  slotMapId: string
  number: string
  view: string
  status: SlotStatus
  typeName: string
}

export interface SlotChanges {
  slots: ISlot[]
  status: SlotStatus
  success: boolean
}
