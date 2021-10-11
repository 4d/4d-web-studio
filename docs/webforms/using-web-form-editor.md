---
id: using-web-form-editor
title: Using the Webform Editor
---

## Creating a Webform

In 4D Web Studio, everything starts with a webform. A webform is a container that holds all the other components (buttons, grids, style boxes, etc.) of your application.

To create a webform:
* from the homepage, click **Webform** and enter a name for the new webform
* from the Webform Editor, click the **New +** tab > **Webform**

## Webform Editor Interface

The Webform Editor provides several tools to customize the interface and contents of your application:

![interface](img/web-form-editor-interface.png)

<ol class="interface-numbers">
<li class="interface-item">Explorer: Displays your project's Webforms, methods and classes (assets and data models are not available yet)</li>
<li class="interface-item">Tabs: They let you keep track of your currently opened elements, such as your forms and methods.</li>
<li class="interface-item">Tool box panel: Contains the Components, Style libray and Data Sources sections.</li>
<li class="interface-item">Canvas: This is where you combine your components, styles and data sources. You can drag and drop components onto your canvas, then drag and drop CSS classes and data sources onto these components, and preview or render your webforms.</li>
<li class="interface-item">Contextual configuration panel: This is where you link events and methods to your components, edit CSS styles, etc.</li>
<li class="interface-item">Properties panel: Allows for advanced style customization. Also allows binding a data source to a component.</li>
<li class="interface-item">Header</li>
</ol>

## Adding components to the Webform

Components are the building blocks of your application. To add a component, drag it from the Components section and drop it on the canvas.

![add-component-screenshot](img/add-component.png)

## Keeping track of the structure

You can use the following tools to manage your components and keep track of them.

### Breadcrumbs

When you select a component, the breadcrumbs display its hierarchy:

![breadcrumbs](img/breadcrumbs.png)

To select any parent component displayed in the breadcrumbs trail, click its name. 

### Outline

The outline section displays the hierarchy of your Webform. You can click an element in the list to select it, or click and drag it anywhere in the outline to move it somewhere else.

To display or hide an element, click the eye icon.

### Tooltip

When you select a component, the tooltip displays its type and offers several actions:

|Icon|Action|
|---|---|
|Cursor|Move the selected component on the canvas|
|Arrow|Select the parent component|
|Delete|Remove the selected component from the canvas|
|CSS|Export the [[overriden CSS properties](#overriding-style-properties) to a new CSS class|
|Barred T|Reset styles (resets the [overriden CSS properties](#overriding-style-properties))|
|Duplicate icon|Duplicate the component|

The tooltip is contextual. This means that some actions are only available to certain elements, and not others. For example, you can duplicate a Text Input component, but not its individual parts (Label and Input).

## Styling a component 

Inside a WebForm, you can style components using the Properties panel and the Styles library and see the result directly on the canvas.

### Resources and Tools

If you're not familiar with CSS properties and styles, or you need a refresher, here are a few useful links:

* Learn CSS on the [MDN website](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
* A guide to [flexbox properties](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) on css-tricks.com
* [Box-shadow examples](https://getcssscan.com/css-box-shadow-examples)
* [Box-shadow generator](https://cssgenerator.org/box-shadow-css-generator.html)

### Styles Library 

One way of styling components is by dragging CSS classes from the Styles library and dropping them on the components.

The Styles Library offers two types of styles: 
* Local: Styles you create
* Theme: Predefined CSS classes

![styles-library](img/styles-library.png)

Unlike Theme classes, Local styles can only be used in the Webforms in which they are created. 

To create a local CSS class, click the "+" button and enter a name. CSS classes can be edited in the Editor panel at the bottom.

### Properties Panel

The properties panel gives you extremely granular control over your elements. 

After you select an element, you can edit its properties using this panel. This includes style properties (as a rule, component properties and styling are separated).

Using the properties panel, you can bind a CSS class to the element and define values individually.

![styles-library](img/properties-panel.png)

Some visual properties, such as grid areas or column size in datatables, can be edited directly on the canvas.

#### Example 

To add a red background to a Button component: 
* From the Styles library:
drag the `bg-red-500` class from the Styles library and drop it on the Button component

* Using the Properties Panel:
    * Select the Button component, and under Style, choose a red color for the background
    * Select the Button component, and in the properties panel, select the `bg-red-500` class in the CSS section

### Overriding style properties

Selecting a component displays its style properties in the Properties Panel. Values set by CSS classes are displayed in italics. For example, assigning the `bg-red-500` class to the component will get the Background property to display *rgb(239,68,68)*.

Modifying these values overrides the initial value for that property. Overriden CSS properties have a blue dot in front of them. 

You can [export the new values](Exporting-styles-as-css-classes-for-reuse) to create a new CSS class.
## Exporting styles as CSS classes for reuse 

You can export the style of an element as a CSS class to reuse it later: 
1. Select a an element on the canvas, the tooltip appears
2. Click the CSS icon in the tooltip and enter a name for the new CSS class
3. Click **Export**

This exports the [new style properties](#overriding-style-properties) of the element as a new local CSS class. Now it appears as a choice in the Styles library and in the property list, and you can apply the class to other elements on your canvas. 

### Editing a CSS class

Once a local class is created, you can hover over it in the Styles Library and click the **Edit Class** button next to its name to edit the CSS directly. The changes apply to all the components using this class.

## Component List

The Component area lets you search for a component or choose one from the list. Once a component is on the canvas, you can [customize its look](#styling-a-component) and (for some components) assign a data source to it.

![alt-text](img/components.png)

The following components are available: 

|Component|Description|
|---|---|
|Webform| Base container that holds all the other components| 
|Stylebox| Container used to keep the content centered and legible |
|Grid| Allows you to produce complex and responsive layouts faster. Grid areas can be edited directly on the canvas |
|Columns|Displays data inside columns|
|Tabs|Organizes and allows navigation between groups of content that are related and at the same level of hierarchy|
|Text input|Allows users to enter data in a form|
|Button|Triggers actions on a web page|
|Radio button|Allows selecting one of a set of options (only one option can be selected at any time)|
|Range input|Allows selecting a value in a range|
|Select box|Allows selecting an item in a list|
|Image|Displays an image|
|Icon|Displays an icon|
|Checkbox|Allows the user to make a binary choice (boolean value)|
|Text|Displays text on a web page|
|Datatable|Displays data in the form of a table. You can select a row to interact with the server|
|Matrix| Container of repeated style boxes|
|Webform loader| Allows you to embed a Webform inside another

> More components will be available in the future, and existing components will be enhanced.

## About data sources

Data sources contain data. You can bind them to your Webform components to determine where the data is displayed in your application.

The **Data Sources** section groups the available data sources:

![alt-text](img/data-sources.png)

In this section, you'll find the following:

*  The **Catalog** holds:
    * data from your database: You can designate entities or entity selections from your [datastore](../ORDA/dsMapping.md#datastore), and they will be handled by the server as **Remote** data sources.
    * Class functions: The Catalog displays the functions defined in each class. 

*  **Remote** data sources: Entities and entity selections, handled on the server, that can be assigned to components. 
They offer functions defined on the ORDA classes that they instantiate ([Entity class](../API/EntityClass.md), [Entity Selection class](../API/EntitySelectionClass.md)).

> When working with 4D projects, only the dataclasses and dataclass attributes [exposed as REST resources](https://developer.4d.com/docs/en/REST/configuration.html#exposing-tables-and-fields) will be available at run time. Unexposed datasources are greyed out.

*  **Local** data sources: Scalar types handled with the browser's memory. Can be assigned to variables. No request is sent to the server to access local data sources.

Only [exposed functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) can be used when configuring an event. Functions that are not exposed are greyed out.

## Creating a data source

To create a data source: 

* From the Catalog: 
    1. In the Data Sources section, choose Catalog > Data Classes
    2. Click the "+" icon next to a dataclass
    3. Select Entity or Entity Selection and click **Confirm**. The newly created Entity or Entity selection now appears as a Remote data source

* From a Remote data source, click the "+" icon:
    * next to an entity selection to create an entity
    * next to an entity's relation to create an entity selection or an entity  

> Unexposed data sources appear in the IDE but are greyed out

## Binding a data source to a component: 

There are several ways to bind a data source to a component:

* Drag it from the Data Source section and drop it on a component
* Enter the name of the data source in the Properties panel > Data source

## Events, methods and class functions

## Events

Events are usually used as a means of triggering certain behaviors. They are used in conjuction with methods and class functions. 

For example, if the user clicks a button on a webpage, you can choose how to react.
Events can also be triggered when a data source is updated. 

![alt-text](img/events.png)

In 4D WebStudio, events are used to execute code on the 4D server. There's no need to write additional Javascript or React code.

Events are executed in the defined order, and you can map class functions to several events or one event to several class functions.

## 4D class Functions

Some 4D class functions allow you to set the behavior of your components.

For example, to display or hide a component when an event occurs, you can use the [4D.WebFormItem class functions](../API/web-form-editor/WebFormItemClass.md)

## Custom class functions

You can also write your own class functions to handle data and events.

For example, to make a search bar, you can attach an `onchange` event to a Text input component and write a class function that taps into a [dataclass](../ORDA/dsMapping.md) to suggest a list of items as the user is typing. 

:::note 

Methods also allow you to determine how to react to certain events, but they need to be defined as datastore, dataclass, entity or entity class functions. We highly recommend using class functions over methods.

:::

## Server-side reference

The server-side reference of a component is its "address" on the server. To set the behavior of a component, you can assign a server-side reference to it, and then [use that reference in class functions](../API/web-form-editor/WebFormItemClass.md).

For example, `WebForm.myImage` refers to the image component with `myImage` as server-side reference.

To assign a server-side reference to a component, enter a value in the Properties Panel > Server Side:

![alt-text](img/image-server-side.png)

You can then modify the behavior of your components using events and functions, such as [4D.WebFormItem class functions](../API/WebFormItemClass.md).