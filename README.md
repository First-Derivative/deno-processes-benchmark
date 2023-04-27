## Checkbrew : A command line tool that checks if a brew package is installed
The `checkbrew.ts` script, when executed as a binary (compiled via `deno compile` or `deno install` ), acts as a command line interface which checks whether you have a brew package installed.

## Execution 
Once the `checkbrew.ts` script is compiled as a binary and added to your `$PATH` you can invoke the executable with the command `checkbrew`. <br/>
An example:
```bash
$ checkbrew avanor 
```
> true
if installed </br>
> false 
if not installed


## Speed-tests & Playgrounds
As you can infer from the name of this repo: the code in this repository is mostly my tinkering and testing of the deno technology. the speed test folder includes functions that test the execution speed of `Deno.command()` and `Deno.run()`. <br/>

### Difference between `Deno.command()` and `Deno.run()`
From what I can tell both commands spawn a subprocess executing whatever command you input into the arguments. However, Deno.Command creates a new object of the Command class which has a method `spawn()` which then creates the subprocess executing the command taken from the class properties. <br/>

`Deno.run()` on the otherhand, is a function call on global `Deno` object (provided by the deno runtime environment) which immediately spawns the subprocess and executes the command from the function arguments. 

[Reading on Deno Command](https://deno.land/api@v1.32.5?s=Deno.Command)
<br/>
[Reading on Deon Run](https://deno.land/api@v1.32.5?s=Deno.run)

### Comprehensive Benchmarking
The built in `deno bench` command is super handy and nifty for performance testing your functions. The testing of the `cmd.ts` and `run.ts` test the perfomance of running the files in the deno runtime via deno run -this was made easy by running the task bench:speedtest (`deno task bench:speedtest`). Then I benchmarked the scripts running as compiled executables via the task build-speedtest:brew and build-speedtest:curl (testing `Deno.command` and `Deno.run` on a curl and brew execution) `deno task build-speedtest:curl`.
<br/>
<br/>
However upon inspection of the results there seems to be no clear performance difference between the executable and the function. Upon further reading of documentation and comments I have learned that this is because deno isnt compiling into system-specific machine which runs on the programming language of the CPU's intstructions set. Instead it bundles all the javascript into a single script which is then turned into an executable which still runs in the deno runtime environment. Therefore it makes sense that there is little to no performance gains as it is still running in the same environment (in the same way if you like).
<br/>
<br/>
[Source](https://github.com/denoland/deno/issues/14872#issuecomment-1156483162)

## Future improvements
* prompt if package not-installed -> `install ? y/n`
* better software distribution via deno install task script
