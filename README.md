# Multiselect

A widgit which allows any number of items to be selected from one list, moving them to the second list when selected. Clicking on an item in the second list returns it to the first list.

_No attempt is made to order items; items are simply appended_.

To use, simply load the "multiselect.js" file via script element. It looks for items with class "multiselect" which contain two lists, the first with class "choices", the second with class "values".

Also required is "keyboardNavigation.js" from https://github.com/RichCaloggero/keyboard-navigation.git

## Demo

http://www.mit.edu/~rjc/aria/multiselect/multiselect.html

The demo implements the following two examples...

## Examples

### Multiselect using two native select elements

All keyboard navigation here is provided by the native select elements. The only action handled by the multiselect widgit is activate, which is triggered via the enter key or spacebar.

Compare this to the second example below which uses unordered lists, and `aria` to label the widgit itself instead of `fieldset`.  In this case,  we imploy "keyboardNavigation.js" ( https://github.com/RichCaloggero/keyboard-navigation.git) to implement navigation within the lists. In this case, we get almost the same behavior as one does via native select elements.

```
<fieldset class="multiselect" id="multiselect-native" aria-describedby="multiselect-native-description"><legend>multiselect native</legend>
<p id="multiselect-native-description">This uses two native HTML select elements.</p>

<select aria-label="choose" class="choices" rows="1">
</select>

<select aria-label="selection" class="values" rows="1">
</select>

<div class="status" aria-live="polite"></div>
</fieldset><!-- .multiselect -->
```


### Multiselect using unordered list elements

```
<div id="multiselect-list" class="multiselect" role="group" aria-labelledby="multiselect-list-label" aria-describedby="multiselect-list-description">
<span id="multiselect-list-label">multiselect using lists</span>
<p id="multiselect-list-description">This uses two html unordered list elements.</p>

<ul aria-label="choose" id="multiselect-list-choices" class="choices">
</ul>

<ul aria-label="selection" id="multiselect-list-values" class="values">
</ul>

<div class="status" aria-live="polite"></div>
</div>
```

