module.exports = [
  {
    type: 'doc',
    id: 'end-user/overview',
    // label: '',
    // className: '',
  },
  {
    type: 'category',
    label: "Core Concepts",
    // className: '',
    link: {
      type: 'doc',
      id: 'end-user/core-concepts/core-concepts',
    },
    items: [
      'end-user/core-concepts/kpi',
      'end-user/core-concepts/browser',
      'end-user/core-concepts/responsive',
      'end-user/core-concepts/real-time',
      'end-user/core-concepts/interactive',
    ],
  },
  {
    type: 'category',
    label: "Basic Navigation",
    // className: '',
    link: {
      type: 'doc',
      id: 'end-user/basic-navigation/basic-navigation',
    },
    items: [
      'end-user/basic-navigation/profiles',
      'end-user/basic-navigation/dashboards',
      'end-user/basic-navigation/groups',
      'end-user/basic-navigation/visualization',
      'end-user/basic-navigation/search',
      'end-user/basic-navigation/analytics',
      'end-user/basic-navigation/alerts',
      'end-user/basic-navigation/dark-light-theme',
      'end-user/basic-navigation/time',
      
    ],
  },

  {
    type: 'category',
    label: "Features",
    link: {
      type: 'doc',
      id: 'end-user/features/features',
    },
    items: [
      'end-user/features/profiles',
      'end-user/features/dashboards',
      'end-user/features/groups',
      {
        type: 'category',
        label: "Visualizations",
        link: {
          type: 'doc',
          id: 'end-user/features/visualizations/visualizations',
        },
        items: [
          'end-user/features/visualizations/kpi',
          'end-user/features/visualizations/charts',
          'end-user/features/visualizations/trends',
          'end-user/features/visualizations/embedded-content',
        ],
      },
    ],
  }
]