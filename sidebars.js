module.exports = {

  docs: [
    {
      type: 'doc',
      id: 'overview',
      label: "Overview"
    },
    {
      type: 'category',
      label: "Configuration",
      items: ['configuration/4d-settings',
        'configuration/license-usage'
      ],
    },
    {
      type: 'category',
      label: 'Designing a webform',
      items: ['design-webforms/create-webform',
        'design-webforms/components',
        'design-webforms/styling',
        'design-webforms/datasources',
        'design-webforms/events/events'
      ],
    },
    {
      type: 'doc',
      id: 'rendering',
      label: "Rendering a webform"
    },
    {
      type: 'doc',
      id: 'coding-and-debugging',
      label: "Coding and debugging"
    },
  ],
  apiSidebar: [
    {
      type: 'doc',
      id: 'API/web-event',
      label: "Web Event"
    },
    {
      type: 'doc',
      id: 'API/WebFormClass',
      label: "WebForm"
    },
    {
      type: 'doc',
      id: 'API/WebFormItemClass',
      label: "WebFormItem"
    }
  ],
};
