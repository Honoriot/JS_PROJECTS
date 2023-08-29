Three parts of Regular Expression :
    1. Meta characters
    2. Quantifiers
    3. Pre-defined classes (A pre-defined group of meta characters)

The above three concepts are very powerful tools to deal with almost any kind of string matching

Steps to create a RegEx::
    Step 1: Create a regex pattern
    A pattern is a series of characters that we want to search in the given test-string. 
    Anything present in between '/' and '/' will become a pattern which can be used on a test-string.

    Step 2: Use meta-characters like [], ^, $
    The meta character [] indicates a single character.
    For example, /h[abc]llo/ matches a single character present inside brackets
    Match : hallo, hbllo, hcllo
    Not Match : hllo, hello, habllo, ..

    We also have [^abc] which will match any single character except the ones given inside brackets.
    Hence, the pattern /h[^abc]llo/ will match "hello", "h!llo", "h6llo" but not "hallo"

    Step 3: Use quantifiers like +, *, ? and {n}