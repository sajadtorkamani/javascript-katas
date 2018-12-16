export const personalise = (campaign, person) => {
  return campaign
    .replace(/\<NAME\>/g, person.name)
    .replace(/\<CITY\>/g, person.city)
    .replace(/\<FAVOURITE PRODUCTS\>/g, person.favourite_products);
};