// try... catch (finally)

// Font: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

// Catching and preventing them from breaking or stopping the execution of our application

//The try statement always starts with a try block. Then, a catch block or a finally block must be present. It's also possible to have both catch and finally blocks. This gives us three forms for the try statement:

try...catch
try...finally
try...catch...finally
//Unlike other constructs such as if or for, the try, catch, and finally blocks must be blocks, instead of single statements.

// Syntax

try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}

tryStatements
// The statements to be executed.

catchStatements
// Statement that is executed if an exception is thrown in the try-block.

exceptionVar Optional
// An optional identifier to hold the caught exception for the associated catch block. If the catch block does not utilize the exception's value, you can omit the exceptionVar and its surrounding parentheses, as catch {...}.

finallyStatements
// Statements that are executed before control flow exits the try...catch...finally construct. These statements execute regardless of whether an exception was thrown or caught.

// Unconditional catch-block
// When a catch-block is used, the catch-block is executed when any exception is thrown from within the try-block. For example, when the exception occurs in the following code, control transfers to the catch-block.
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}

// The catch-block specifies an identifier (e in the example above) that holds the value of the exception; this value is only available in the scope of the catch-block.

// Conditional catch-blocks
// You can create "Conditional catch-blocks" by combining try...catch blocks with if...else if...else structures, like this:
try {
  myroutine(); // may throw three types of exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  }
}

//Colt's WDB example:
function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3)); // if doesn't work, it will catch the error
  } catch (e) {
    console.log("Please pass a string next time!") //Not a good approach returning a string, it is for illustration purpose
  }
}


// A common use case for this is to only catch (and silence) a small subset of expected errors, and then re-throw the error in other cases:

try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // statements to handle this very common expected error
  } else {
    throw e; // re-throw the error unchanged
  }
}

// The exception identifier
// When an exception is thrown in the try-block, exception_var (i.e., the e in catch (e)) holds the exception value. You can use this identifier to get information about the exception that was thrown. This identifier is only available in the catch-block's scope. If you don't need the exception value, it could be omitted.
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

// The finally-block
// The finally block contains statements to execute after the try block and catch block(s) execute, but before the statements following the try...catch...finally block. Control flow will always enter the finally block, which can proceed in one of the following ways:

// Immediately before the try block finishes execution normally (and no exceptions were thrown);
// Immediately before the catch block finishes execution normally;
// Immediately before a control-flow statement (return, throw, break, continue) is executed in the try block or catch block.
// If an exception is thrown from the try block, even when there's no catch block to handle the exception, the finally block still executes, in which case the exception is still thrown immediately after the finally block finishes executing.

// The following example shows one use case for the finally-block. The code opens a file and then executes statements that use the file; the finally-block makes sure the file always closes after it is used even if an exception was thrown.
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}

// Control flow statements (return, throw, break, continue) in the finally block will "mask" any completion value of the try block or catch block. In this example, the try block tries to return 1, but before returning, the control flow is yielded to the finally block first, so the finally block's return value is returned instead.

function doIt() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

doIt(); // returns 2

// It is generally a bad idea to have control flow statements in the finally block. Only use it for cleanup code.

// Examples
// Nested try-blocks
// First, let's see what happens with this:

try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Logs:
// "finally"
// "outer" "oops"

// Now, if we already caught the exception in the inner try-block by adding a catch-block:
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Logs:
// "inner" "oops"
// "finally"

// And now, let's rethrow the error.
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Logs:
// "inner" "oops"
// "finally"
// "outer" "oops"

// Any given exception will be caught only once by the nearest enclosing catch-block unless it is rethrown. Of course, any new exceptions raised in the "inner" block (because the code in catch-block may do something that throws), will be caught by the "outer" block.

// Returning from a finally-block
// If the finally-block returns a value, this value becomes the return value of the entire try-catch-finally statement, regardless of any return statements in the try and catch-blocks. This includes exceptions thrown inside of the catch-block:
(() => {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
})();

// Logs:
// "inner" "oops"
// "finally"

// The outer "oops" is not thrown because of the return in the finally-block. The same would apply to any value returned from the catch-block.