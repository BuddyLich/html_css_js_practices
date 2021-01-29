## Notes:

### CSS:
1. The blur effects works very obviously on the edges, so sometimes it's better to expend the picture so that the edges are hidden


2. How to expend the background picture:



    background: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80') no-repeat center center/cover;
    position: absolute;
    top: -30px;
    left: -30px;

    /* move the background picture upper and more left for about 30px */
    width: calc(100vw + 60px);
    height: calc(100vh + 60px);
    /* expend the picture make it larger than the scrren a bit, for about 60px on width and height */

    }


### JavaScript:
1. The use of template literal. It's a bit similar to the f-string in Python.

e.g. 


    let foo = "foo";

    console.log(`${foo} is bar`);
