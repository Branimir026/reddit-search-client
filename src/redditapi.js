const redditApi = {
  search: async function (searchTerm, sortBy) {
    try {
      console.log(`Searching ${searchTerm} sorted by ${sortBy}`);

      const getData = await fetch(
        `https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&raw_json=1`
      );
      const searchData = await getData.json();
      const results = await searchData.data.children.map((data) => data.data);
      return results;
    } catch (err) {
      return err;
    }
  },
};

export default redditApi;
