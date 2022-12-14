# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
Tried to follow the SOLID principles, mainly the Single Responsibility Principle by just giving one task per auxiliary function. 
It is assigning the default value for the candidate, then it validates the input and return as soon as it can, in order to avoid unnecessary validations.
--- 
### Auxiliary functions added:
- validateTypeCandidate: Check if the type is string or parses it.
- handleHash: Check the length of the data to be hashed. If the length is lower than the constant MAX_PARTITION_KEY_LENGTH it returns the same data.
- createHash: It creates a crypto hash hex digested based in the algorithm and the data that is coming from the arguments.
- deterministicPartitionKey: It is responsable for validate and use all the above mentioned functions in order to return the candidate properly.