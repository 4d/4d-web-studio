---
id: WebFormClass
title: WebForm
---

When working in 4D Web Studio, the `WebForm` class allows you to handle the behavior of your webform and its components on the server side.

### WebForm Objects

`WebForm` objects are instantiated with the [Web Form](#web-form) command.

## Web Form

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R3|Added|
</details>

<!-- REF #_command_.Web Form.Syntax -->
**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|4D.WebForm|<-|New `WebForm` object
<!-- END REF -->

#### Description
The `Web Form` command <!-- REF #_command_.Web Form.Summary --> returns a `4D.WebForm` object that references a webform.<!-- END REF -->

Each property of the returned object is an object of the [4D.WebFormItem](WebFormItemClass.md) class.

The command returns `Null` if it is called in a request that does not originate from 4D Web Studio.


