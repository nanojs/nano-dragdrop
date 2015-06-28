nano Drag and Drop plugin
=========================

The **Drag and Drop** plugin for the [nano JavaScript framework](http://nanojs.org) adds 3 methods to the API wrapper which allow you to drag, resize and drop elements, the `nano.dragdrop` object containing the 4 internal methods for selecting, dragging, resizing, and dropping elements, and also 3 new parameters to define movement limits, drag area and resize scaling when creating new DOM nodes.

Installation
------------

To add the **Drag and Drop** plugin include it in the `<head>` of the document, after the core framework:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Site</title>
    <script src="path/to/nano.js"></script>
    <script src="path/to/nano.dragdrop.js"></script>
  </head>
  <body>
		
    <!-- your content here -->
		
  </body>
</html>
```

Documentation
-------------

Full documentation for the plugin is available at [http://nanojs.org/plugins/dragdrop](http://nanojs.org/plugins/dragdrop).

Support
-------

For support, bugs and feature requests, please use the [issues](https://github.com/nanojs/nano-dragdrop/issues) section of this repository.

Contributing
------------

If you'd like to contribute new features, enhancements or bug fixes to the code base just follow these steps:

* Create a [GitHub](https://github.com/signup/free) account, if you don't own one already
* Then, [fork](https://help.github.com/articles/fork-a-repo) the [nano-dragdrop](https://github.com/nanojs/nano-dragdrop) repository to your account
* Create a new [branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository) from the *develop* branch in your forked repository
* Modify the existing code, or add new code to your branch
* When ready, make a [pull request](http://help.github.com/send-pull-requests/) to the main repository

There may be some discussion regarding your contribution to the repository before any code is merged in, so be prepared to provide feedback on your contribution if required.

License
-------

Copyright 2008-2015 James Watts. All rights reserved.

Licensed under the GNU/GPL. Redistributions of the source code included in this repository must retain the copyright notice found in each file.
