const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


/*This code is related to measuring and reporting web performance metrics using the "web-vitals" library. 

Measuring Web Performance:

When you use the internet, the speed and quality of the websites you visit can vary. Some websites might load quickly and feel smooth, while others might take longer and seem sluggish.
Web performance metrics help measure how fast and responsive a website is, and they provide insights into user experience.