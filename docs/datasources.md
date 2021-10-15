---
id: datasources
title: Datasources
---

## What is a datasource

Data sources contain data. You can bind them to your Webform components to determine where the data is displayed in your application.

The **Data Sources** section groups the available datasources:

![alt-text](img/data-sources.png)

In this section, you'll find the following:

*  The **Catalog** holds:
    * data from your database: You can designate entities or entity selections from your [datastore](https://developer.4d.com/docs/en/ORDA/dsmapping.html), and they will be handled by the server as **Remote** datasources.
    * Class functions: The Catalog displays the functions defined in each class. 

*  **Remote** datasources: Entities and entity selections, handled on the server, that can be assigned to components. 
They offer functions defined on the ORDA classes that they instantiate ([Entity class](../API/EntityClass.md), [Entity Selection class](../API/EntitySelectionClass.md)).

*  **Local** datasources: Scalar types handled with the browser's memory. Can be assigned to variables. No request is sent to the server to access local datasources.

### Exposed and non-exposed assets

4D Web Studio runs through the [4D WebAdmin web server](https://developer.4d.com/docs/en/Admin/webAdmin.html). When you use 4D Web Studio as a developer, even when you preview a webform in the studio, you’re using the 4D WebAdmin web server. This allows you to see dataclasses, functions and attributes that are not exposed as REST resources for example (they are greyed out).

However, [webform rendering](./rendering.md) happens outside 4D Web Studio, and is served by the [standard 4D web server](https://developer.4d.com/docs/en/WebServer/webServer.html). In this situation, your web application cannot access assets that are not exposed as REST resources.

See [Exposed vs non-exposed functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) and [Exposing tables](https://developer.4d.com/docs/en/REST/configuration.html#exposing-tables) for more information on how to expose assets.

## Creating a datasource

To create a datasource: 

* From the Catalog: 
    1. In the Data Sources section, choose Catalog > Data Classes
    2. Click the "+" icon next to a dataclass
    3. Select Entity or Entity Selection and click **Confirm**. The newly created Entity or Entity selection now appears as a Remote datasource

* From a Remote datasource, click the "+" icon:
    * next to an entity selection to create an entity
    * next to an entity's relation to create an entity selection or an entity  

> Unexposed datasources appear in the IDE but are greyed out

## Binding a datasource to a component: 

There are several ways to bind a datasource to a component:

* Drag it from the Data Source section and drop it on a component
* Enter the name of the datasource in the **Properties panel** > **Data source** 