export class CategoryEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly picture: string,
    public readonly title: string,
    public readonly description: string,
  ) {}
}
