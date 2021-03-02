## Notes:

### CSS:

1. If there're multiple places use the same color, then just use CSS varaiables
2. border-radius can set different values to each corner of a div.

e.g.

    border-radius: 0 0 40px 40px;

3. flex wrap decides the content is shown in one line or multiple lines, 


    * nowrap => all the elements in flexbox is displayed in one line, there could be overflow
    * wrap => elements are put in multiple lines.
    * wrap-reverse => similar to wrap, but the sequence of elements is reversed


### JavaScript:

1. The use of `someDOMobject.nextElementSibling`. It returns the next element, if this is the last one then return null. 
There are similar method called previousElementSibling and firstElementSibling.

Note: it doesn't work on array
