export class Player {
    constructor(
        public id: number,
        public name: string,
        public hp: number, 
        public attack: number,
        public dex: number,
        public pageId: number,
        public floorLevel: number
    ) {}
}