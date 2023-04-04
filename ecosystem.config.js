module.exports = {
    apps: [
      {
        name: 'tw-clone',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  