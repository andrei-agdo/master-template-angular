function getComponent()
{
    return ng.getOwningComponent($0);
}

function updateComponent()
{
    ng.applyChanges(ng.getOwningComponent($0))
}