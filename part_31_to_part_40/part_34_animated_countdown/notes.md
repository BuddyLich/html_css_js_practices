## Note

### CSS:
1. You can add a bounce effect by doing things like:


    @keyframes goIn {
    0% {
        transform: translate(-50%, -50%) rotate(120deg);
    }

    30% {
        transform: translate(-50%, -50%) rotate(-20deg);
    }

    60% {
        transform: translate(-50%, -50%) rotate(10deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    }

2. Another method to keep element center vertically and horizontally (probably not a good way):

    someElement {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(120deg);
    }


### JavaScript:

1. The use of `nextElementSibling()`
