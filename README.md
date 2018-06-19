# macOS 11.4 Beta Checkbox-Fix

A tiny Google Chrome extension to fix the zoom-level on macOS 11.4 (Mojave) Beta.

## Summary

When using macOS 11.14 Mojave (Beta), Chrome does not render the checkboxes properly. 
To workaround it, this plugin sets the zoom-level of each page to 1.0000001, which fixes 
the issue until Chrome officially supports Mojave.

## Known Issues

- [ ] The workaround does not seem to be picked up by `<iframe>` tags so far. Feel free to submit
a pull request for that!

## License

MIT

## Author

Hans Knöchel
