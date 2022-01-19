---
id: datasources
title: Datasources
---

Datasources contain data. You can bind them to your Webform components to determine where the data is displayed in your application.

## Datasource types

Inside the Webform Editor, the **Data Sources** section groups the available datasources:

![alt-text](img/data-sources.png)

In this section, you'll find:

*  The **Catalog**, which holds:
    * data from your database: You can designate entities or entity selections from your [datastore](https://developer.4d.com/docs/en/ORDA/dsmapping.html), and they will be handled by the server as Remote datasources.
    * Class functions: The Catalog displays the functions defined in each class. 

*  **Remote datasources**: Entities and entity selections, handled on the server, that can be assigned to components. 
They offer functions defined on the [ORDA classes](https://developer.4d.com/docs/en/ORDA/ordaClasses.html#class-description) that they instantiate (Entity class, Entity Selection class).

*  **Local datasources**: Scalar types handled with the browser's memory. Can be assigned to variables. No request is sent to the server to access local datasources.

### Exposed and non-exposed assets

4D Web Studio runs through the [4D WebAdmin web server](https://developer.4d.com/docs/en/Admin/webAdmin.html). When you use 4D Web Studio as a developer, even when you preview a webform in the studio, you’re using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out).

However, [webform rendering](../rendering.md) happens outside 4D Web Studio, and is served by the [standard 4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html). In this situation, your web application cannot access assets that are not exposed as REST resources.

See [Exposed vs non-exposed functions](https://developer.4d.com/docs/en/ORDA/ordaClasses.html#exposed-vs-non-exposed-functions) and [Exposing tables](https://developer.4d.com/docs/en/REST/configuration.html#exposing-tables) for more information on how to expose assets.

## Creating a datasource 

#### From the Catalog

1. In the Data Sources section, choose **Catalog** > **Data Classes**
2. Click the "+" icon next to a dataclass
3. Select Entity or Entity Selection and click **Confirm**. The newly created Entity or Entity selection now appears as a Remote datasource

#### From a Remote datasource

Click the "+" icon:
* next to an entity selection to create an entity (current element of the entity selection)
* next to an entity's relation to create an entity selection or an entity 

#### From a Text component

Select text inside a **Text** component and click the **Toggle Datasource** icon to create a local datasource.
## Binding a datasource to a component

There are several ways to bind a datasource to a component:

* Drag it from the Data Source section and drop it on a component
* Select a component and enter the name of the datasource in the Properties panel > Data Access > DataSource 
## Attaching events to datasources 

You can attach events to datasources to trigger certain actions when these datasources are updated in the web browser. See [datasource events](design-webforms/events/events.md#datasource-events) for more information.

## Storing data in a datasource

You can store data in local and remote datasources. For example, you can configure an event that calls a function, and store the result of that function in a datasource. See the [example from the user events section](design-webforms/events/events.md#example-search-feature-using-the-onchange-event).

## Keeping track of your datasources

The **Inspect** option ![styles-library](img/inspect-button.png) allows you to check where your datasources are used in your webforms. Toggle the option by clicking the icon, then mouse over a datasource to highlight its location in your webform.

