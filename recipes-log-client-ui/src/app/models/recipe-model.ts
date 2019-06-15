export interface RecipeModel {
    _id: string,
    category: string,
    title: string,
    chef: string,
    restaurant: string,
    description: string,
    ingredients: string,
    process: string,
    image_url: string,
    create_at: Date
    __v: number
}