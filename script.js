/**
 * Created by JENN on 9/12/2016.
 */

var tryit = function () {
    var display = "\t\"This about all, to thine own self be true, \nAnd it must follow, as the night the day, " +
        "\nThou canst not then be false to any man\"" +
        "\n\t\t\t\' William Shakespeare\'" +"\n\n\tI used the tab sequence\\ the new line sequence\\ the double quote sequence \\ the single quote sequence \\ and last but never least, the backslash.";

    document.getElementById("display").value = display;
}

window.onload = function () {
    document.getElementById("tryit").onclick = tryit;

}