export default function (router) {
  router.use((req, res, next) => {
    let userId = req.cookies.userId;
    if (!userId) {
      userId = Math.round(Date.now() + Math.random() * 100);
      res.cookie('userId', userId);
    }
    req.userId = userId;
    next();
  });

  router.use((req, res, next) => {
    res.api = function (data, errno, msg) {
      if (errno === undefined) {
        errno = 0;
      };
      res.json({
        errno,
        data,
        msg
      });
    };
    next();
  });

  router.delete('/api/todos/:id([0-9]+)$', router.action('api/todos').del);
  router.use('/api/todos/:id([0-9]+)$', router.action('api/todos'));
  router.use('/api/todos/:id([0-9]+)/complete', router.action('api/todos/complete'));
  // 可以所有页面使用相同的getInitialState解决初始状态不同步问题
  // router.all('*', router.action('index'));
};
