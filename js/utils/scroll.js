const blockScroll = () => {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
};

const unblockScroll = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  // eslint-disable-next-line radix
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
};

export {blockScroll};
export {unblockScroll};
