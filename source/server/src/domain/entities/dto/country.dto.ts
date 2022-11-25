export class CountryDto {
  id: number;

  name: string;

  description: string;

  picture: string;

  constructor(id: number, name: string, description:string, picture: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.picture = picture;
  }
}
