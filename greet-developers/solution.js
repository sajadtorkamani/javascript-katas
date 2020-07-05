const greetDevelopers = developers => {
  return developers.map(developer => ({
    ...developer,
    greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
  }))
}

export default greetDevelopers
