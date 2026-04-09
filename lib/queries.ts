export const contactQuery = `*[_type == "contact"][0]{
  email,
  address,

}`;

export const vacancyQuery = `*[_type == "vacancy"][0]{
  isHiring,
  role,
  description
}`;
export const teamQuery = `*[_type == "team"] | order(order asc){
  initials,
  name,
  role,
  order
}`;
