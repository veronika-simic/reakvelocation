export class CategoryDto {
  id: number;

  name: string;

  picture: string;

  title:string;

  description: string

  constructor(id: number, name: string, picture:string,  title:string, description: string) {
    this.id = id;
    this.name = name;
    this.picture = picture
    this.title = title
    this.description = description;
  }
}
