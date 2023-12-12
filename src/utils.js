export   function debounce(fn, delay = 250) {
    let timerId;
    return function(...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }
