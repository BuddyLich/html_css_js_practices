## Notes

---
### CSS
1. if some objects are used heavily, they can be declared as variables, and being referenced later..

e.g.

    :root {
      --line-border-fill: #3498db;
    }

    .btn {
      background-color: var(--line-border-fill);
    }

2. `transform` property applies a 2D or 3D transformation to an element. 
   This property allows you to rotate, scale, move, skew, etc., elements.


3. The process defines a button class in CSS:
    1. background-color, color, border, shape, font, padding, font-size
    2. the looking of the button when it is active (being clicked)
    3. the looking of the cursor while hovering
    4. the looking of the button and cursor when the button is disabled
    

4. `font-family: inherit;` means the object's font inherits the font of its parent object
