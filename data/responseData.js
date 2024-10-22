const generateDynamicDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return Math.floor(date.getTime() / 1000);
};

const getApiResponse = () => {
  return {
    graph: {
      "0": { date: generateDynamicDate(7), value: 23430 },
      "1": { date: generateDynamicDate(6), value: 2000 },
      "2": { date: generateDynamicDate(5), value: 21628 },
      "3": { date: generateDynamicDate(4), value: 25427 },
      "4": { date: generateDynamicDate(3), value: 26212 },
      "5": { date: generateDynamicDate(2), value: 3784 },
      "8": { date: generateDynamicDate(1), value: 31734 }
    },
    table: {
      title: "Top Pages",
      data: {
        headers: ["ID", "Url", "Title", "Pageviews", "Date"],
        rows: [
          { id: 49, url: "http://www.test.com/8931/", title: "Anjum WP Page 4196", pageviews: 1760, date: generateDynamicDate(7) },
          { id: 42, url: "http://www.test.com/8142/", title: "Anjum WP Page 7299", pageviews: 5121, date: generateDynamicDate(2) },
          { id: 10, url: "http://www.test.com/1317/", title: "Anjum WP Page 3667", pageviews: 6329, date: generateDynamicDate(6) },
          { id: 91, url: "http://www.test.com/4376/", title: "Anjum WP Page 858", pageviews: 6913, date: generateDynamicDate(7) },
          { id: 44, url: "http://www.test.com/8873/", title: "Anjum WP Page 4661", pageviews: 1282, date: generateDynamicDate(4) }
        ]
      }
    }
  };
};

module.exports = getApiResponse;
