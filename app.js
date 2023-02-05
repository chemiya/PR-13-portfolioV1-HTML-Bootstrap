function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
  }
  
  const sections = [
    selectElementByClass("home"),
    selectElementByClass("about"),
    selectElementByClass("skills"),
    selectElementByClass("habilities"),
    selectElementByClass("habilities1"),
    selectElementByClass("projects"),
    selectElementByClass("contact")
    
  ];
  
  const navItems = {
    home: selectElementByClass("link-home"),
    about: selectElementByClass("link-about"),
    skills: selectElementByClass("link-skills"),
    habilities: selectElementByClass("link-habilities"),
    habilities1: selectElementByClass("link-habilities"),
    projects: selectElementByClass("link-projects"),
    contact: selectElementByClass("link-contact")
  };
  
  // intersection observer setup
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  };
  
  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        const navItem = navItems[entry.target.id];
        // add 'active' class on the navItem
        navItem.classList.add("active");
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(navItems).forEach((item) => {
          if (item != navItem) {
            item.classList.remove("active");
          }
        });
      }
    });
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach((sec) => observer.observe(sec));