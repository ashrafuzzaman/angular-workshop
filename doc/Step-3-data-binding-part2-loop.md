Data binding
============
Topics covered
--------------
- Initialize data with ng-init
- Looping a simple list
- Apply filtering to a list

Start with the step 2.
```bash
git checkout step-2-data-binding
```
 
```html
<div data-ng-init="names=['Muntasim', 'Jitu', 'Bazlur', 'Younus', 'Rakib', 'Sharvi']">
    <h3>Looping over a list</h3>
    <ul>
        <li data-ng-repeat="name in names">{{name}}</li>
    </ul>
</div>
```

You can initialize data with **data-ng-init** and loop over with **data-ng-repeat**.

Filter
------
