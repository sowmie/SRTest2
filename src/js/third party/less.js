Last login: Mon May  6 17:29:13 on ttys000
Sowmyas-MBP:~ sowmyaramani$ pwd
/Users/sowmyaramani
Sowmyas-MBP:~ sowmyaramani$ cd Documents/
Sowmyas-MBP:Documents sowmyaramani$ cd GitHub/
Sowmyas-MBP:GitHub sowmyaramani$ ls
microservices-demo-master	scalyr
Sowmyas-MBP:GitHub sowmyaramani$ cd scalyr/
Sowmyas-MBP:scalyr sowmyaramani$ ls
InternalTools			README.md			ScalyrTest			docker
Jenkinsfile			ScalyrAgent			annotations			pom.xml
Jenkinsfile-shellcheck		ScalyrSite			checkstyle-suppressions.xml	scripts
Profiling			ScalyrSite2			config				spotbugs-security-include.xml
Sowmyas-MBP:scalyr sowmyaramani$ cd ..
Sowmyas-MBP:GitHub sowmyaramani$ ls
microservices-demo-master	scalyr
Sowmyas-MBP:GitHub sowmyaramani$ git clone http://github.com/sowmyaramani/qa.git
Cloning into 'qa'...
Username for 'https://github.com': sowmyaramani
Password for 'https://sowmyaramani@github.com': 
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/sowmyaramani/qa.git/'
Sowmyas-MBP:GitHub sowmyaramani$ git clone http://github.com/sowmyaramani/qa.git
Cloning into 'qa'...
Username for 'https://github.com': sowmyaramani
Password for 'https://sowmyaramani@github.com': 
warning: redirecting to https://github.com/sowmyaramani/qa.git/
remote: Enumerating objects: 791, done.
remote: Total 791 (delta 0), reused 0 (delta 0), pack-reused 791
Receiving objects: 100% (791/791), 5.63 MiB | 11.92 MiB/s, done.
Resolving deltas: 100% (486/486), done.
Sowmyas-MBP:GitHub sowmyaramani$ ls
microservices-demo-master	qa				scalyr
Sowmyas-MBP:GitHub sowmyaramani$ git remote add upstream https://github.com/scalyr/qa.git
fatal: not a git repository (or any of the parent directories): .git
Sowmyas-MBP:GitHub sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub
Sowmyas-MBP:GitHub sowmyaramani$ git remote -v
fatal: not a git repository (or any of the parent directories): .git
Sowmyas-MBP:GitHub sowmyaramani$ git remote add upstream https://github.com/scalyr/qa
fatal: not a git repository (or any of the parent directories): .git
Sowmyas-MBP:GitHub sowmyaramani$ ls -a
.				..				microservices-demo-master	qa				scalyr
Sowmyas-MBP:GitHub sowmyaramani$ cd qa
Sowmyas-MBP:qa sowmyaramani$ ls
README.md	bin		pom.xml		src		target		test-output	testng.xml
Sowmyas-MBP:qa sowmyaramani$ vi .git
Sowmyas-MBP:qa sowmyaramani$ git remote add upstream https://github.com/scalyr/qa.git
Sowmyas-MBP:qa sowmyaramani$ git remote -v
origin	http://github.com/sowmyaramani/qa.git (fetch)
origin	http://github.com/sowmyaramani/qa.git (push)
upstream	https://github.com/scalyr/qa.git (fetch)
upstream	https://github.com/scalyr/qa.git (push)
Sowmyas-MBP:qa sowmyaramani$ git checkout -b QA-28
Switched to a new branch 'QA-28'
Sowmyas-MBP:qa sowmyaramani$ ls
README.md	bin		pom.xml		src		target		test-output	testng.xml
Sowmyas-MBP:qa sowmyaramani$ ls bin
BAT
Sowmyas-MBP:qa sowmyaramani$ ls bin/BAT
FindingeventsTest.class	JSTest.class		LoginTest.class		Utilities.class		testng.xml
Sowmyas-MBP:qa sowmyaramani$ ls bin/pom.xml
ls: bin/pom.xml: No such file or directory
Sowmyas-MBP:qa sowmyaramani$ vi pom.xml 
Sowmyas-MBP:qa sowmyaramani$ ls
README.md	bin		pom.xml		src		target		test-output	testng.xml
Sowmyas-MBP:qa sowmyaramani$ git rm pom.xml
rm 'pom.xml'
Sowmyas-MBP:qa sowmyaramani$ git rm -r bin
rm 'bin/.DS_Store'
rm 'bin/BAT/FindingeventsTest.class'
rm 'bin/BAT/JSTest.class'
rm 'bin/BAT/LoginTest.class'
rm 'bin/BAT/Utilities.class'
rm 'bin/BAT/testng.xml'
Sowmyas-MBP:qa sowmyaramani$ git rm -r src
rm 'src/main/resources/mac/driver/chromedriver'
rm 'src/test/java/BAT/CheckElementsOnToggle.java'
rm 'src/test/java/BAT/FindingeventsTest.java'
rm 'src/test/java/BAT/JSTest.java'
rm 'src/test/java/BAT/LoginTest.java'
rm 'src/test/java/BAT/Utilities.java'
rm 'src/test/java/BAT/isElementPresent.java'
Sowmyas-MBP:qa sowmyaramani$ git rm -r target
rm 'target/classes/main/resources/mac/driver/chromedriver'
rm 'target/classes/test/java/BAT/CheckElementsOnToggle.class'
rm 'target/classes/test/java/BAT/FindingeventsTest.class'
rm 'target/classes/test/java/BAT/JSTest.class'
rm 'target/classes/test/java/BAT/LoginTest.class'
rm 'target/classes/test/java/BAT/Utilities.class'
rm 'target/classes/test/java/BAT/isElementPresent.class'
rm 'target/maven-archiver/pom.properties'
rm 'target/maven-status/maven-compiler-plugin/compile/default-compile/createdFiles.lst'
rm 'target/maven-status/maven-compiler-plugin/compile/default-compile/inputFiles.lst'
rm 'target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/createdFiles.lst'
rm 'target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/inputFiles.lst'
rm 'target/scalyr-automation-0.0.1-SNAPSHOT.jar'
rm 'target/surefire-reports/BAT/CheckElementsOnToggle.html'
rm 'target/surefire-reports/BAT/CheckElementsOnToggle.properties'
rm 'target/surefire-reports/BAT/CheckElementsOnToggle.xml'
rm 'target/surefire-reports/BAT/FindingeventsTest.html'
rm 'target/surefire-reports/BAT/FindingeventsTest.properties'
rm 'target/surefire-reports/BAT/FindingeventsTest.xml'
rm 'target/surefire-reports/BAT/JSTest.html'
rm 'target/surefire-reports/BAT/JSTest.properties'
rm 'target/surefire-reports/BAT/JSTest.xml'
rm 'target/surefire-reports/BAT/LoginTest.html'
rm 'target/surefire-reports/BAT/LoginTest.properties'
rm 'target/surefire-reports/BAT/LoginTest.xml'
rm 'target/surefire-reports/BAT/classes.html'
rm 'target/surefire-reports/BAT/groups.html'
rm 'target/surefire-reports/BAT/index.html'
rm 'target/surefire-reports/BAT/main.html'
rm 'target/surefire-reports/BAT/methods-alphabetical.html'
rm 'target/surefire-reports/BAT/methods-not-run.html'
rm 'target/surefire-reports/BAT/methods.html'
rm 'target/surefire-reports/BAT/reporter-output.html'
rm 'target/surefire-reports/BAT/testng-failed.xml'
rm 'target/surefire-reports/BAT/testng.xml.html'
rm 'target/surefire-reports/BAT/toc.html'
rm 'target/surefire-reports/Command line suite/Command line test.html'
rm 'target/surefire-reports/Command line suite/Command line test.properties'
rm 'target/surefire-reports/Command line suite/Command line test.xml'
rm 'target/surefire-reports/Command line suite/classes.html'
rm 'target/surefire-reports/Command line suite/groups.html'
rm 'target/surefire-reports/Command line suite/index.html'
rm 'target/surefire-reports/Command line suite/main.html'
rm 'target/surefire-reports/Command line suite/methods-alphabetical.html'
rm 'target/surefire-reports/Command line suite/methods-not-run.html'
rm 'target/surefire-reports/Command line suite/methods.html'
rm 'target/surefire-reports/Command line suite/reporter-output.html'
rm 'target/surefire-reports/Command line suite/testng-failed.xml'
rm 'target/surefire-reports/Command line suite/testng.xml.html'
rm 'target/surefire-reports/Command line suite/toc.html'
rm 'target/surefire-reports/TEST-TestSuite.xml'
rm 'target/surefire-reports/TestSuite.txt'
rm 'target/surefire-reports/emailable-report.html'
rm 'target/surefire-reports/index.html'
rm 'target/surefire-reports/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml'
rm 'target/surefire-reports/junitreports/TEST-test.java.BAT.FindingeventsTest.xml'
rm 'target/surefire-reports/junitreports/TEST-test.java.BAT.JSTest.xml'
rm 'target/surefire-reports/junitreports/TEST-test.java.BAT.LoginTest.xml'
rm 'target/surefire-reports/testng-failed.xml'
rm 'target/surefire-reports/testng-results.xml'
rm 'target/surefire-reports/testng.css'
rm 'target/test-classes/test/java/BAT/CheckElementsOnToggle.class'
rm 'target/test-classes/test/java/BAT/FindingeventsTest.class'
rm 'target/test-classes/test/java/BAT/JSTest.class'
rm 'target/test-classes/test/java/BAT/LoginTest.class'
rm 'target/test-classes/test/java/BAT/Utilities.class'
rm 'target/test-classes/test/java/BAT/isElementPresent.class'
Sowmyas-MBP:qa sowmyaramani$ ls
README.md	test-output	testng.xml
Sowmyas-MBP:qa sowmyaramani$ git rm -r test-output/
rm 'test-output/BAT/CheckElementsOnToggle.html'
rm 'test-output/BAT/CheckElementsOnToggle.xml'
rm 'test-output/BAT/FindingeventsTest.html'
rm 'test-output/BAT/FindingeventsTest.xml'
rm 'test-output/BAT/JSTest.html'
rm 'test-output/BAT/JSTest.xml'
rm 'test-output/BAT/LoginTest.html'
rm 'test-output/BAT/LoginTest.xml'
rm 'test-output/BAT/testng-failed.xml'
rm 'test-output/Default suite/Default test.html'
rm 'test-output/Default suite/Default test.xml'
rm 'test-output/Default suite/testng-failed.xml'
rm 'test-output/bullet_point.png'
rm 'test-output/collapseall.gif'
rm 'test-output/emailable-report.html'
rm 'test-output/failed.png'
rm 'test-output/index.html'
rm 'test-output/jquery-1.7.1.min.js'
rm 'test-output/junitreports/TEST-BAT.FindingeventsTest.xml'
rm 'test-output/junitreports/TEST-BAT.JSTest.xml'
rm 'test-output/junitreports/TEST-BAT.LoginTest.xml'
rm 'test-output/junitreports/TEST-FindingeventsTest.xml'
rm 'test-output/junitreports/TEST-JSTest.xml'
rm 'test-output/junitreports/TEST-LoginTest.xml'
rm 'test-output/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml'
rm 'test-output/junitreports/TEST-test.java.BAT.FindingeventsTest.xml'
rm 'test-output/junitreports/TEST-test.java.BAT.JSTest.xml'
rm 'test-output/junitreports/TEST-test.java.BAT.LoginTest.xml'
rm 'test-output/navigator-bullet.png'
rm 'test-output/old/BAT/CheckElementsOnToggle.properties'
rm 'test-output/old/BAT/FindingeventsTest.properties'
rm 'test-output/old/BAT/JSTest.properties'
rm 'test-output/old/BAT/LoginTest.properties'
rm 'test-output/old/BAT/classes.html'
rm 'test-output/old/BAT/groups.html'
rm 'test-output/old/BAT/index.html'
rm 'test-output/old/BAT/main.html'
rm 'test-output/old/BAT/methods-alphabetical.html'
rm 'test-output/old/BAT/methods-not-run.html'
rm 'test-output/old/BAT/methods.html'
rm 'test-output/old/BAT/reporter-output.html'
rm 'test-output/old/BAT/testng.xml.html'
rm 'test-output/old/BAT/toc.html'
rm 'test-output/old/Default suite/Default test.properties'
rm 'test-output/old/Default suite/classes.html'
rm 'test-output/old/Default suite/groups.html'
rm 'test-output/old/Default suite/index.html'
rm 'test-output/old/Default suite/main.html'
rm 'test-output/old/Default suite/methods-alphabetical.html'
rm 'test-output/old/Default suite/methods-not-run.html'
rm 'test-output/old/Default suite/methods.html'
rm 'test-output/old/Default suite/reporter-output.html'
rm 'test-output/old/Default suite/testng.xml.html'
rm 'test-output/old/Default suite/toc.html'
rm 'test-output/old/index.html'
rm 'test-output/passed.png'
rm 'test-output/skipped.png'
rm 'test-output/testng-failed.xml'
rm 'test-output/testng-reports.css'
rm 'test-output/testng-reports.js'
rm 'test-output/testng-results.xml'
rm 'test-output/testng.css'
Sowmyas-MBP:qa sowmyaramani$ ls
README.md	testng.xml
Sowmyas-MBP:qa sowmyaramani$ vi testng.xml 
Sowmyas-MBP:qa sowmyaramani$ git rm -r testng.xml 
rm 'testng.xml'
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ vi README.md
Sowmyas-MBP:qa sowmyaramani$ vi README.md
Sowmyas-MBP:qa sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub/qa
Sowmyas-MBP:qa sowmyaramani$ cp README.md /Users/sowmyaramani/Documents/
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ git revert
usage: git revert [<options>] <commit-ish>...
   or: git revert <subcommand>

    --quit                end revert or cherry-pick sequence
    --continue            resume revert or cherry-pick sequence
    --abort               cancel revert or cherry-pick sequence
    -n, --no-commit       don't automatically commit
    -e, --edit            edit the commit message
    -s, --signoff         add Signed-off-by:
    -m, --mainline <parent-number>
                          select mainline parent
    --rerere-autoupdate   update the index with reused conflict resolution if possible
    --strategy <strategy>
                          merge strategy
    -X, --strategy-option <option>
                          option for merge strategy
    -S, --gpg-sign[=<key-id>]
                          GPG sign commit

Sowmyas-MBP:qa sowmyaramani$ man git revert
No manual entry for revert
Sowmyas-MBP:qa sowmyaramani$ vi README.md
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28
  master
Sowmyas-MBP:qa sowmyaramani$ vi README.md
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ git fetch upstream
From https://github.com/scalyr/qa
 * [new branch]      master     -> upstream/master
Sowmyas-MBP:qa sowmyaramani$ git checkout master
M	README.md
D	bin/.DS_Store
D	bin/BAT/FindingeventsTest.class
D	bin/BAT/JSTest.class
D	bin/BAT/LoginTest.class
D	bin/BAT/Utilities.class
D	bin/BAT/testng.xml
D	pom.xml
D	src/main/resources/mac/driver/chromedriver
D	src/test/java/BAT/CheckElementsOnToggle.java
D	src/test/java/BAT/FindingeventsTest.java
D	src/test/java/BAT/JSTest.java
D	src/test/java/BAT/LoginTest.java
D	src/test/java/BAT/Utilities.java
D	src/test/java/BAT/isElementPresent.java
D	target/classes/main/resources/mac/driver/chromedriver
D	target/classes/test/java/BAT/CheckElementsOnToggle.class
D	target/classes/test/java/BAT/FindingeventsTest.class
D	target/classes/test/java/BAT/JSTest.class
D	target/classes/test/java/BAT/LoginTest.class
D	target/classes/test/java/BAT/Utilities.class
D	target/classes/test/java/BAT/isElementPresent.class
D	target/maven-archiver/pom.properties
D	target/maven-status/maven-compiler-plugin/compile/default-compile/createdFiles.lst
D	target/maven-status/maven-compiler-plugin/compile/default-compile/inputFiles.lst
D	target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/createdFiles.lst
D	target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/inputFiles.lst
D	target/scalyr-automation-0.0.1-SNAPSHOT.jar
D	target/surefire-reports/BAT/CheckElementsOnToggle.html
D	target/surefire-reports/BAT/CheckElementsOnToggle.properties
D	target/surefire-reports/BAT/CheckElementsOnToggle.xml
D	target/surefire-reports/BAT/FindingeventsTest.html
D	target/surefire-reports/BAT/FindingeventsTest.properties
D	target/surefire-reports/BAT/FindingeventsTest.xml
D	target/surefire-reports/BAT/JSTest.html
D	target/surefire-reports/BAT/JSTest.properties
D	target/surefire-reports/BAT/JSTest.xml
D	target/surefire-reports/BAT/LoginTest.html
D	target/surefire-reports/BAT/LoginTest.properties
D	target/surefire-reports/BAT/LoginTest.xml
D	target/surefire-reports/BAT/classes.html
D	target/surefire-reports/BAT/groups.html
D	target/surefire-reports/BAT/index.html
D	target/surefire-reports/BAT/main.html
D	target/surefire-reports/BAT/methods-alphabetical.html
D	target/surefire-reports/BAT/methods-not-run.html
D	target/surefire-reports/BAT/methods.html
D	target/surefire-reports/BAT/reporter-output.html
D	target/surefire-reports/BAT/testng-failed.xml
D	target/surefire-reports/BAT/testng.xml.html
D	target/surefire-reports/BAT/toc.html
D	target/surefire-reports/Command line suite/Command line test.html
D	target/surefire-reports/Command line suite/Command line test.properties
D	target/surefire-reports/Command line suite/Command line test.xml
D	target/surefire-reports/Command line suite/classes.html
D	target/surefire-reports/Command line suite/groups.html
D	target/surefire-reports/Command line suite/index.html
D	target/surefire-reports/Command line suite/main.html
D	target/surefire-reports/Command line suite/methods-alphabetical.html
D	target/surefire-reports/Command line suite/methods-not-run.html
D	target/surefire-reports/Command line suite/methods.html
D	target/surefire-reports/Command line suite/reporter-output.html
D	target/surefire-reports/Command line suite/testng-failed.xml
D	target/surefire-reports/Command line suite/testng.xml.html
D	target/surefire-reports/Command line suite/toc.html
D	target/surefire-reports/TEST-TestSuite.xml
D	target/surefire-reports/TestSuite.txt
D	target/surefire-reports/emailable-report.html
D	target/surefire-reports/index.html
D	target/surefire-reports/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml
D	target/surefire-reports/junitreports/TEST-test.java.BAT.FindingeventsTest.xml
D	target/surefire-reports/junitreports/TEST-test.java.BAT.JSTest.xml
D	target/surefire-reports/junitreports/TEST-test.java.BAT.LoginTest.xml
D	target/surefire-reports/testng-failed.xml
D	target/surefire-reports/testng-results.xml
D	target/surefire-reports/testng.css
D	target/test-classes/test/java/BAT/CheckElementsOnToggle.class
D	target/test-classes/test/java/BAT/FindingeventsTest.class
D	target/test-classes/test/java/BAT/JSTest.class
D	target/test-classes/test/java/BAT/LoginTest.class
D	target/test-classes/test/java/BAT/Utilities.class
D	target/test-classes/test/java/BAT/isElementPresent.class
D	test-output/BAT/CheckElementsOnToggle.html
D	test-output/BAT/CheckElementsOnToggle.xml
D	test-output/BAT/FindingeventsTest.html
D	test-output/BAT/FindingeventsTest.xml
D	test-output/BAT/JSTest.html
D	test-output/BAT/JSTest.xml
D	test-output/BAT/LoginTest.html
D	test-output/BAT/LoginTest.xml
D	test-output/BAT/testng-failed.xml
D	test-output/Default suite/Default test.html
D	test-output/Default suite/Default test.xml
D	test-output/Default suite/testng-failed.xml
D	test-output/bullet_point.png
D	test-output/collapseall.gif
D	test-output/emailable-report.html
D	test-output/failed.png
D	test-output/index.html
D	test-output/jquery-1.7.1.min.js
D	test-output/junitreports/TEST-BAT.FindingeventsTest.xml
D	test-output/junitreports/TEST-BAT.JSTest.xml
D	test-output/junitreports/TEST-BAT.LoginTest.xml
D	test-output/junitreports/TEST-FindingeventsTest.xml
D	test-output/junitreports/TEST-JSTest.xml
D	test-output/junitreports/TEST-LoginTest.xml
D	test-output/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml
D	test-output/junitreports/TEST-test.java.BAT.FindingeventsTest.xml
D	test-output/junitreports/TEST-test.java.BAT.JSTest.xml
D	test-output/junitreports/TEST-test.java.BAT.LoginTest.xml
D	test-output/navigator-bullet.png
D	test-output/old/BAT/CheckElementsOnToggle.properties
D	test-output/old/BAT/FindingeventsTest.properties
D	test-output/old/BAT/JSTest.properties
D	test-output/old/BAT/LoginTest.properties
D	test-output/old/BAT/classes.html
D	test-output/old/BAT/groups.html
D	test-output/old/BAT/index.html
D	test-output/old/BAT/main.html
D	test-output/old/BAT/methods-alphabetical.html
D	test-output/old/BAT/methods-not-run.html
D	test-output/old/BAT/methods.html
D	test-output/old/BAT/reporter-output.html
D	test-output/old/BAT/testng.xml.html
D	test-output/old/BAT/toc.html
D	test-output/old/Default suite/Default test.properties
D	test-output/old/Default suite/classes.html
D	test-output/old/Default suite/groups.html
D	test-output/old/Default suite/index.html
D	test-output/old/Default suite/main.html
D	test-output/old/Default suite/methods-alphabetical.html
D	test-output/old/Default suite/methods-not-run.html
D	test-output/old/Default suite/methods.html
D	test-output/old/Default suite/reporter-output.html
D	test-output/old/Default suite/testng.xml.html
D	test-output/old/Default suite/toc.html
D	test-output/old/index.html
D	test-output/passed.png
D	test-output/skipped.png
D	test-output/testng-failed.xml
D	test-output/testng-reports.css
D	test-output/testng-reports.js
D	test-output/testng-results.xml
D	test-output/testng.css
D	testng.xml
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:qa sowmyaramani$ git merge upstream/master
Already up to date.
Sowmyas-MBP:qa sowmyaramani$ git checkout QA-28
M	README.md
D	bin/.DS_Store
D	bin/BAT/FindingeventsTest.class
D	bin/BAT/JSTest.class
D	bin/BAT/LoginTest.class
D	bin/BAT/Utilities.class
D	bin/BAT/testng.xml
D	pom.xml
D	src/main/resources/mac/driver/chromedriver
D	src/test/java/BAT/CheckElementsOnToggle.java
D	src/test/java/BAT/FindingeventsTest.java
D	src/test/java/BAT/JSTest.java
D	src/test/java/BAT/LoginTest.java
D	src/test/java/BAT/Utilities.java
D	src/test/java/BAT/isElementPresent.java
D	target/classes/main/resources/mac/driver/chromedriver
D	target/classes/test/java/BAT/CheckElementsOnToggle.class
D	target/classes/test/java/BAT/FindingeventsTest.class
D	target/classes/test/java/BAT/JSTest.class
D	target/classes/test/java/BAT/LoginTest.class
D	target/classes/test/java/BAT/Utilities.class
D	target/classes/test/java/BAT/isElementPresent.class
D	target/maven-archiver/pom.properties
D	target/maven-status/maven-compiler-plugin/compile/default-compile/createdFiles.lst
D	target/maven-status/maven-compiler-plugin/compile/default-compile/inputFiles.lst
D	target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/createdFiles.lst
D	target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/inputFiles.lst
D	target/scalyr-automation-0.0.1-SNAPSHOT.jar
D	target/surefire-reports/BAT/CheckElementsOnToggle.html
D	target/surefire-reports/BAT/CheckElementsOnToggle.properties
D	target/surefire-reports/BAT/CheckElementsOnToggle.xml
D	target/surefire-reports/BAT/FindingeventsTest.html
D	target/surefire-reports/BAT/FindingeventsTest.properties
D	target/surefire-reports/BAT/FindingeventsTest.xml
D	target/surefire-reports/BAT/JSTest.html
D	target/surefire-reports/BAT/JSTest.properties
D	target/surefire-reports/BAT/JSTest.xml
D	target/surefire-reports/BAT/LoginTest.html
D	target/surefire-reports/BAT/LoginTest.properties
D	target/surefire-reports/BAT/LoginTest.xml
D	target/surefire-reports/BAT/classes.html
D	target/surefire-reports/BAT/groups.html
D	target/surefire-reports/BAT/index.html
D	target/surefire-reports/BAT/main.html
D	target/surefire-reports/BAT/methods-alphabetical.html
D	target/surefire-reports/BAT/methods-not-run.html
D	target/surefire-reports/BAT/methods.html
D	target/surefire-reports/BAT/reporter-output.html
D	target/surefire-reports/BAT/testng-failed.xml
D	target/surefire-reports/BAT/testng.xml.html
D	target/surefire-reports/BAT/toc.html
D	target/surefire-reports/Command line suite/Command line test.html
D	target/surefire-reports/Command line suite/Command line test.properties
D	target/surefire-reports/Command line suite/Command line test.xml
D	target/surefire-reports/Command line suite/classes.html
D	target/surefire-reports/Command line suite/groups.html
D	target/surefire-reports/Command line suite/index.html
D	target/surefire-reports/Command line suite/main.html
D	target/surefire-reports/Command line suite/methods-alphabetical.html
D	target/surefire-reports/Command line suite/methods-not-run.html
D	target/surefire-reports/Command line suite/methods.html
D	target/surefire-reports/Command line suite/reporter-output.html
D	target/surefire-reports/Command line suite/testng-failed.xml
D	target/surefire-reports/Command line suite/testng.xml.html
D	target/surefire-reports/Command line suite/toc.html
D	target/surefire-reports/TEST-TestSuite.xml
D	target/surefire-reports/TestSuite.txt
D	target/surefire-reports/emailable-report.html
D	target/surefire-reports/index.html
D	target/surefire-reports/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml
D	target/surefire-reports/junitreports/TEST-test.java.BAT.FindingeventsTest.xml
D	target/surefire-reports/junitreports/TEST-test.java.BAT.JSTest.xml
D	target/surefire-reports/junitreports/TEST-test.java.BAT.LoginTest.xml
D	target/surefire-reports/testng-failed.xml
D	target/surefire-reports/testng-results.xml
D	target/surefire-reports/testng.css
D	target/test-classes/test/java/BAT/CheckElementsOnToggle.class
D	target/test-classes/test/java/BAT/FindingeventsTest.class
D	target/test-classes/test/java/BAT/JSTest.class
D	target/test-classes/test/java/BAT/LoginTest.class
D	target/test-classes/test/java/BAT/Utilities.class
D	target/test-classes/test/java/BAT/isElementPresent.class
D	test-output/BAT/CheckElementsOnToggle.html
D	test-output/BAT/CheckElementsOnToggle.xml
D	test-output/BAT/FindingeventsTest.html
D	test-output/BAT/FindingeventsTest.xml
D	test-output/BAT/JSTest.html
D	test-output/BAT/JSTest.xml
D	test-output/BAT/LoginTest.html
D	test-output/BAT/LoginTest.xml
D	test-output/BAT/testng-failed.xml
D	test-output/Default suite/Default test.html
D	test-output/Default suite/Default test.xml
D	test-output/Default suite/testng-failed.xml
D	test-output/bullet_point.png
D	test-output/collapseall.gif
D	test-output/emailable-report.html
D	test-output/failed.png
D	test-output/index.html
D	test-output/jquery-1.7.1.min.js
D	test-output/junitreports/TEST-BAT.FindingeventsTest.xml
D	test-output/junitreports/TEST-BAT.JSTest.xml
D	test-output/junitreports/TEST-BAT.LoginTest.xml
D	test-output/junitreports/TEST-FindingeventsTest.xml
D	test-output/junitreports/TEST-JSTest.xml
D	test-output/junitreports/TEST-LoginTest.xml
D	test-output/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml
D	test-output/junitreports/TEST-test.java.BAT.FindingeventsTest.xml
D	test-output/junitreports/TEST-test.java.BAT.JSTest.xml
D	test-output/junitreports/TEST-test.java.BAT.LoginTest.xml
D	test-output/navigator-bullet.png
D	test-output/old/BAT/CheckElementsOnToggle.properties
D	test-output/old/BAT/FindingeventsTest.properties
D	test-output/old/BAT/JSTest.properties
D	test-output/old/BAT/LoginTest.properties
D	test-output/old/BAT/classes.html
D	test-output/old/BAT/groups.html
D	test-output/old/BAT/index.html
D	test-output/old/BAT/main.html
D	test-output/old/BAT/methods-alphabetical.html
D	test-output/old/BAT/methods-not-run.html
D	test-output/old/BAT/methods.html
D	test-output/old/BAT/reporter-output.html
D	test-output/old/BAT/testng.xml.html
D	test-output/old/BAT/toc.html
D	test-output/old/Default suite/Default test.properties
D	test-output/old/Default suite/classes.html
D	test-output/old/Default suite/groups.html
D	test-output/old/Default suite/index.html
D	test-output/old/Default suite/main.html
D	test-output/old/Default suite/methods-alphabetical.html
D	test-output/old/Default suite/methods-not-run.html
D	test-output/old/Default suite/methods.html
D	test-output/old/Default suite/reporter-output.html
D	test-output/old/Default suite/testng.xml.html
D	test-output/old/Default suite/toc.html
D	test-output/old/index.html
D	test-output/passed.png
D	test-output/skipped.png
D	test-output/testng-failed.xml
D	test-output/testng-reports.css
D	test-output/testng-reports.js
D	test-output/testng-results.xml
D	test-output/testng.css
D	testng.xml
Switched to branch 'QA-28'
Sowmyas-MBP:qa sowmyaramani$ git rebase master
Cannot rebase: You have unstaged changes.
Additionally, your index contains uncommitted changes.
Please commit or stash them.
Sowmyas-MBP:qa sowmyaramani$ git commit
[QA-28 565c9cc] QA-28 Removing old QA files.
 144 files changed, 4485 deletions(-)
 delete mode 100644 bin/.DS_Store
 delete mode 100644 bin/BAT/FindingeventsTest.class
 delete mode 100644 bin/BAT/JSTest.class
 delete mode 100644 bin/BAT/LoginTest.class
 delete mode 100644 bin/BAT/Utilities.class
 delete mode 100644 bin/BAT/testng.xml
 delete mode 100644 pom.xml
 delete mode 100755 src/main/resources/mac/driver/chromedriver
 delete mode 100644 src/test/java/BAT/CheckElementsOnToggle.java
 delete mode 100644 src/test/java/BAT/FindingeventsTest.java
 delete mode 100644 src/test/java/BAT/JSTest.java
 delete mode 100644 src/test/java/BAT/LoginTest.java
 delete mode 100644 src/test/java/BAT/Utilities.java
 delete mode 100644 src/test/java/BAT/isElementPresent.java
 delete mode 100644 target/classes/main/resources/mac/driver/chromedriver
 delete mode 100644 target/classes/test/java/BAT/CheckElementsOnToggle.class
 delete mode 100644 target/classes/test/java/BAT/FindingeventsTest.class
 delete mode 100644 target/classes/test/java/BAT/JSTest.class
 delete mode 100644 target/classes/test/java/BAT/LoginTest.class
 delete mode 100644 target/classes/test/java/BAT/Utilities.class
 delete mode 100644 target/classes/test/java/BAT/isElementPresent.class
 delete mode 100644 target/maven-archiver/pom.properties
 delete mode 100644 target/maven-status/maven-compiler-plugin/compile/default-compile/createdFiles.lst
 delete mode 100644 target/maven-status/maven-compiler-plugin/compile/default-compile/inputFiles.lst
 delete mode 100644 target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/createdFiles.lst
 delete mode 100644 target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/inputFiles.lst
 delete mode 100644 target/scalyr-automation-0.0.1-SNAPSHOT.jar
 delete mode 100644 target/surefire-reports/BAT/CheckElementsOnToggle.html
 delete mode 100644 target/surefire-reports/BAT/CheckElementsOnToggle.properties
 delete mode 100644 target/surefire-reports/BAT/CheckElementsOnToggle.xml
 delete mode 100644 target/surefire-reports/BAT/FindingeventsTest.html
 delete mode 100644 target/surefire-reports/BAT/FindingeventsTest.properties
 delete mode 100644 target/surefire-reports/BAT/FindingeventsTest.xml
 delete mode 100644 target/surefire-reports/BAT/JSTest.html
 delete mode 100644 target/surefire-reports/BAT/JSTest.properties
 delete mode 100644 target/surefire-reports/BAT/JSTest.xml
 delete mode 100644 target/surefire-reports/BAT/LoginTest.html
 delete mode 100644 target/surefire-reports/BAT/LoginTest.properties
 delete mode 100644 target/surefire-reports/BAT/LoginTest.xml
 delete mode 100644 target/surefire-reports/BAT/classes.html
 delete mode 100644 target/surefire-reports/BAT/groups.html
 delete mode 100644 target/surefire-reports/BAT/index.html
 delete mode 100644 target/surefire-reports/BAT/main.html
 delete mode 100644 target/surefire-reports/BAT/methods-alphabetical.html
 delete mode 100644 target/surefire-reports/BAT/methods-not-run.html
 delete mode 100644 target/surefire-reports/BAT/methods.html
 delete mode 100644 target/surefire-reports/BAT/reporter-output.html
 delete mode 100644 target/surefire-reports/BAT/testng-failed.xml
 delete mode 100644 target/surefire-reports/BAT/testng.xml.html
 delete mode 100644 target/surefire-reports/BAT/toc.html
 delete mode 100644 target/surefire-reports/Command line suite/Command line test.html
 delete mode 100644 target/surefire-reports/Command line suite/Command line test.properties
 delete mode 100644 target/surefire-reports/Command line suite/Command line test.xml
 delete mode 100644 target/surefire-reports/Command line suite/classes.html
 delete mode 100644 target/surefire-reports/Command line suite/groups.html
 delete mode 100644 target/surefire-reports/Command line suite/index.html
 delete mode 100644 target/surefire-reports/Command line suite/main.html
 delete mode 100644 target/surefire-reports/Command line suite/methods-alphabetical.html
 delete mode 100644 target/surefire-reports/Command line suite/methods-not-run.html
 delete mode 100644 target/surefire-reports/Command line suite/methods.html
 delete mode 100644 target/surefire-reports/Command line suite/reporter-output.html
 delete mode 100644 target/surefire-reports/Command line suite/testng-failed.xml
 delete mode 100644 target/surefire-reports/Command line suite/testng.xml.html
 delete mode 100644 target/surefire-reports/Command line suite/toc.html
 delete mode 100644 target/surefire-reports/TEST-TestSuite.xml
 delete mode 100644 target/surefire-reports/TestSuite.txt
 delete mode 100644 target/surefire-reports/emailable-report.html
 delete mode 100644 target/surefire-reports/index.html
 delete mode 100644 target/surefire-reports/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml
 delete mode 100644 target/surefire-reports/junitreports/TEST-test.java.BAT.FindingeventsTest.xml
 delete mode 100644 target/surefire-reports/junitreports/TEST-test.java.BAT.JSTest.xml
 delete mode 100644 target/surefire-reports/junitreports/TEST-test.java.BAT.LoginTest.xml
 delete mode 100644 target/surefire-reports/testng-failed.xml
 delete mode 100644 target/surefire-reports/testng-results.xml
 delete mode 100644 target/surefire-reports/testng.css
 delete mode 100644 target/test-classes/test/java/BAT/CheckElementsOnToggle.class
 delete mode 100644 target/test-classes/test/java/BAT/FindingeventsTest.class
 delete mode 100644 target/test-classes/test/java/BAT/JSTest.class
 delete mode 100644 target/test-classes/test/java/BAT/LoginTest.class
 delete mode 100644 target/test-classes/test/java/BAT/Utilities.class
 delete mode 100644 target/test-classes/test/java/BAT/isElementPresent.class
 delete mode 100644 test-output/BAT/CheckElementsOnToggle.html
 delete mode 100644 test-output/BAT/CheckElementsOnToggle.xml
 delete mode 100644 test-output/BAT/FindingeventsTest.html
 delete mode 100644 test-output/BAT/FindingeventsTest.xml
 delete mode 100644 test-output/BAT/JSTest.html
 delete mode 100644 test-output/BAT/JSTest.xml
 delete mode 100644 test-output/BAT/LoginTest.html
 delete mode 100644 test-output/BAT/LoginTest.xml
 delete mode 100644 test-output/BAT/testng-failed.xml
 delete mode 100644 test-output/Default suite/Default test.html
 delete mode 100644 test-output/Default suite/Default test.xml
 delete mode 100644 test-output/Default suite/testng-failed.xml
 delete mode 100644 test-output/bullet_point.png
 delete mode 100644 test-output/collapseall.gif
 delete mode 100644 test-output/emailable-report.html
 delete mode 100644 test-output/failed.png
 delete mode 100644 test-output/index.html
 delete mode 100644 test-output/jquery-1.7.1.min.js
 delete mode 100644 test-output/junitreports/TEST-BAT.FindingeventsTest.xml
 delete mode 100644 test-output/junitreports/TEST-BAT.JSTest.xml
 delete mode 100644 test-output/junitreports/TEST-BAT.LoginTest.xml
 delete mode 100644 test-output/junitreports/TEST-FindingeventsTest.xml
 delete mode 100644 test-output/junitreports/TEST-JSTest.xml
 delete mode 100644 test-output/junitreports/TEST-LoginTest.xml
 delete mode 100644 test-output/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml
 delete mode 100644 test-output/junitreports/TEST-test.java.BAT.FindingeventsTest.xml
 delete mode 100644 test-output/junitreports/TEST-test.java.BAT.JSTest.xml
 delete mode 100644 test-output/junitreports/TEST-test.java.BAT.LoginTest.xml
 delete mode 100644 test-output/navigator-bullet.png
 delete mode 100644 test-output/old/BAT/CheckElementsOnToggle.properties
 delete mode 100644 test-output/old/BAT/FindingeventsTest.properties
 delete mode 100644 test-output/old/BAT/JSTest.properties
 delete mode 100644 test-output/old/BAT/LoginTest.properties
 delete mode 100644 test-output/old/BAT/classes.html
 delete mode 100644 test-output/old/BAT/groups.html
 delete mode 100644 test-output/old/BAT/index.html
 delete mode 100644 test-output/old/BAT/main.html
 delete mode 100644 test-output/old/BAT/methods-alphabetical.html
 delete mode 100644 test-output/old/BAT/methods-not-run.html
 delete mode 100644 test-output/old/BAT/methods.html
 delete mode 100644 test-output/old/BAT/reporter-output.html
 delete mode 100644 test-output/old/BAT/testng.xml.html
 delete mode 100644 test-output/old/BAT/toc.html
 delete mode 100644 test-output/old/Default suite/Default test.properties
 delete mode 100644 test-output/old/Default suite/classes.html
 delete mode 100644 test-output/old/Default suite/groups.html
 delete mode 100644 test-output/old/Default suite/index.html
 delete mode 100644 test-output/old/Default suite/main.html
 delete mode 100644 test-output/old/Default suite/methods-alphabetical.html
 delete mode 100644 test-output/old/Default suite/methods-not-run.html
 delete mode 100644 test-output/old/Default suite/methods.html
 delete mode 100644 test-output/old/Default suite/reporter-output.html
 delete mode 100644 test-output/old/Default suite/testng.xml.html
 delete mode 100644 test-output/old/Default suite/toc.html
 delete mode 100644 test-output/old/index.html
 delete mode 100644 test-output/passed.png
 delete mode 100644 test-output/skipped.png
 delete mode 100644 test-output/testng-failed.xml
 delete mode 100644 test-output/testng-reports.css
 delete mode 100644 test-output/testng-reports.js
 delete mode 100644 test-output/testng-results.xml
 delete mode 100644 test-output/testng.css
 delete mode 100644 testng.xml
Sowmyas-MBP:qa sowmyaramani$ git fetch upstream
Sowmyas-MBP:qa sowmyaramani$ git checkout master
M	README.md
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:qa sowmyaramani$ git merge upstream/master
Already up to date.
Sowmyas-MBP:qa sowmyaramani$ git checkout QA-28
M	README.md
Switched to branch 'QA-28'
Sowmyas-MBP:qa sowmyaramani$ git rebase master
Cannot rebase: You have unstaged changes.
Please commit or stash them.
Sowmyas-MBP:qa sowmyaramani$ git show
commit 565c9cc92461021e466b9844e009fe56ef81e1ff (HEAD -> QA-28)
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:38:29 2019 -0700

    QA-28 Removing old QA files.

diff --git a/bin/.DS_Store b/bin/.DS_Store
deleted file mode 100644
index f0f0502..0000000
Binary files a/bin/.DS_Store and /dev/null differ
diff --git a/bin/BAT/FindingeventsTest.class b/bin/BAT/FindingeventsTest.class
deleted file mode 100644
index 559892a..0000000
Binary files a/bin/BAT/FindingeventsTest.class and /dev/null differ
diff --git a/bin/BAT/JSTest.class b/bin/BAT/JSTest.class
deleted file mode 100644
index 5c53328..0000000
Binary files a/bin/BAT/JSTest.class and /dev/null differ
diff --git a/bin/BAT/LoginTest.class b/bin/BAT/LoginTest.class
deleted file mode 100644
index 7ec6017..0000000
Binary files a/bin/BAT/LoginTest.class and /dev/null differ
diff --git a/bin/BAT/Utilities.class b/bin/BAT/Utilities.class
deleted file mode 100644
index 588cd7a..0000000
Binary files a/bin/BAT/Utilities.class and /dev/null differ
diff --git a/bin/BAT/testng.xml b/bin/BAT/testng.xml
deleted file mode 100644
index 010475a..0000000
--- a/bin/BAT/testng.xml
+++ /dev/null
@@ -1,19 +0,0 @@
-<?xml version="1.0" encoding="UTF-8"?>
-<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
-<suite name="BAT">
-     <test name="LoginTest" >
-  <classes>
-  <class name= "BAT.LoginTest"/>
-  </classes>
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ git add README.md 
Sowmyas-MBP:qa sowmyaramani$ git commit
[QA-28 84cf2ee] QA-28 Updated README.md
 1 file changed, 33 insertions(+)
Sowmyas-MBP:qa sowmyaramani$ git rebase master
Current branch QA-28 is up to date.
Sowmyas-MBP:qa sowmyaramani$ git checkout
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28
  master
Sowmyas-MBP:qa sowmyaramani$ git rebase -i master
Successfully rebased and updated refs/heads/QA-28.
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28
  master
Sowmyas-MBP:qa sowmyaramani$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:qa sowmyaramani$ ls
README.md	bin		pom.xml		src		target		test-output	testng.xml
Sowmyas-MBP:qa sowmyaramani$ git checkout QA-28
Switched to branch 'QA-28'
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28
  master
Sowmyas-MBP:qa sowmyaramani$ git push origin QA-28
warning: redirecting to https://github.com/sowmyaramani/qa.git/
Counting objects: 5, done.
Delta compression using up to 12 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 1.02 KiB | 1.02 MiB/s, done.
Total 5 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
remote: 
remote: Create a pull request for 'QA-28' on GitHub by visiting:
remote:      https://github.com/sowmyaramani/qa/pull/new/QA-28
remote: 
To http://github.com/sowmyaramani/qa.git
 * [new branch]      QA-28 -> QA-28
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git commit
On branch QA-28
Changes not staged for commit:
	modified:   README.md

no changes added to commit
Sowmyas-MBP:qa sowmyaramani$ git add README.md 
Sowmyas-MBP:qa sowmyaramani$ git commit
[QA-28 ef5aa26] QA-28 Updated README.md
 1 file changed, 13 insertions(+), 11 deletions(-)
Sowmyas-MBP:qa sowmyaramani$ git fetch upstream
Sowmyas-MBP:qa sowmyaramani$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:qa sowmyaramani$ git merge upstream/master
Already up to date.
Sowmyas-MBP:qa sowmyaramani$ git checkout QA-28
Switched to branch 'QA-28'
Sowmyas-MBP:qa sowmyaramani$ git rebase master
Current branch QA-28 is up to date.
Sowmyas-MBP:qa sowmyaramani$ git checkout
Sowmyas-MBP:qa sowmyaramani$ git rebase -i master
[detached HEAD 5992079] QA-28 Updated README.md
 Date: Tue May 7 08:40:41 2019 -0700
 1 file changed, 35 insertions(+)
Successfully rebased and updated refs/heads/QA-28.
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28
  master
Sowmyas-MBP:qa sowmyaramani$ git push origin QA-28
warning: redirecting to https://github.com/sowmyaramani/qa.git/
To http://github.com/sowmyaramani/qa.git
 ! [rejected]        QA-28 -> QA-28 (non-fast-forward)
error: failed to push some refs to 'http://github.com/sowmyaramani/qa.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
Sowmyas-MBP:qa sowmyaramani$ git Sowmyas-MBP:qa sowmyaramani$ git checkout master
git: 'Sowmyas-MBP:qa' is not a git command. See 'git --help'.
Sowmyas-MBP:qa sowmyaramani$ Switched to branch 'master'
-bash: Switched: command not found
Sowmyas-MBP:qa sowmyaramani$ Your branch is up to date with 'origin/master'.
-bash: Your: command not found
Sowmyas-MBP:qa sowmyaramani$ git revert
usage: git revert [<options>] <commit-ish>...
   or: git revert <subcommand>

    --quit                end revert or cherry-pick sequence
    --continue            resume revert or cherry-pick sequence
    --abort               cancel revert or cherry-pick sequence
    -n, --no-commit       don't automatically commit
    -e, --edit            edit the commit message
    -s, --signoff         add Signed-off-by:
    -m, --mainline <parent-number>
                          select mainline parent
    --rerere-autoupdate   update the index with reused conflict resolution if possible
    --strategy <strategy>
                          merge strategy
    -X, --strategy-option <option>
                          option for merge strategy
    -S, --gpg-sign[=<key-id>]
                          GPG sign commit

Sowmyas-MBP:qa sowmyaramani$ git show
commit 59920798f7e4d16670bde53a666467c67be0b907 (HEAD -> QA-28)
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:40:41 2019 -0700

    QA-28 Updated README.md

diff --git a/README.md b/README.md
index f770c18..2ba043e 100644
--- a/README.md
commit 59920798f7e4d16670bde53a666467c67be0b907 (HEAD -> QA-28)
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:40:41 2019 -0700

    QA-28 Updated README.md

diff --git a/README.md b/README.md
index f770c18..2ba043e 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,37 @@
 Welcome !!
 
+Guide
+=====
+Note: v1, created on 05/07/19. Verify and follow.
+1. Create a fork on github to the scalyr qa repo.
+2. Clone the fork to your local machine: git clone http://github.com/<userName>/qa.git
+3. cd qa
+4. Add a remote to the forked repo to keep your fork up-to-date: 
+git remote add upsteam https://githiub.com/scalyr/qa.git
+5. Verify new remote named upstream:
+git remote -v
+6. To update fork with latest changes:
+git fetch upsteam
+7. Checkout the master branch
+git checkout master
+8. Create a ticket to track your changesi. Include ticket number in commet message.
+git branch <newFeature> 
+9. git checkout <newFeature>
+10. Make your changes
+11. git commit
+12. git fetch upstream
+13. git checkout master
+14. git merge upstream/master
+15. git checkout <newFeature>
+16. git rebase master
+17. git checkout
+18. git rebase -i master
Sowmyas-MBP:qa sowmyaramani$ !
-bash: syntax error near unexpected token `newline'
Sowmyas-MBP:qa sowmyaramani$ !git logs
git show logs
fatal: ambiguous argument 'logs': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
Sowmyas-MBP:qa sowmyaramani$ git log
commit 59920798f7e4d16670bde53a666467c67be0b907 (HEAD -> QA-28)
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:40:41 2019 -0700

    QA-28 Updated README.md

commit 565c9cc92461021e466b9844e009fe56ef81e1ff
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:38:29 2019 -0700

    QA-28 Removing old QA files.

commit 294b53326aaaf777d1c231c6e794680ff80703d6 (upstream/master, origin/master, origin/HEAD, master)
Author: Suchi <suchi@scalyr.com>
Date:   Wed Sep 5 10:26:52 2018 -0700

    Checking visiblity on toggle and parameterising urls

commit 6054b81fcc405e7a01f00ce9e5546fd38e042fc2
Author: Suchi <suchi@scalyr.com>
Date:   Thu Aug 30 11:46:07 2018 -0700

    Adding all the tests to testng.xml

commit 4460788e17dfd2a97dfaac2de69426e63f898521
Author: Suchi <suchi@scalyr.com>
Date:   Thu Aug 30 11:42:23 2018 -0700

    Check elements on toggle
    
    Testcase to check if al the buttons are present on search page when user toggles

commit aff58980eefa2696eaa919af8859813c13da2309
Author: Suchi <suchi@scalyr.com>
Date:   Thu Aug 23 10:25:31 2018 -0700

    Adding more pages to test JS errors

commit 6bfb7e4d98abb27719e48cbfbce698509a0ac19b
Sowmyas-MBP:qa sowmyaramani$ !
Sowmyas-MBP:qa sowmyaramani$ :q!ted token `newline'
-bash: :q!: command not found
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub/qa
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28
  master
Sowmyas-MBP:qa sowmyaramani$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:qa sowmyaramani$ git pull upstream master
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (1/1), done.
From https://github.com/scalyr/qa
 * branch            master     -> FETCH_HEAD
   294b533..572ead8  master     -> upstream/master
Updating 294b533..572ead8
Fast-forward
 README.md                                                                                  |  33 +++++++++
 bin/.DS_Store                                                                              | Bin 6148 -> 0 bytes
 bin/BAT/FindingeventsTest.class                                                            | Bin 1701 -> 0 bytes
 bin/BAT/JSTest.class                                                                       | Bin 1934 -> 0 bytes
 bin/BAT/LoginTest.class                                                                    | Bin 773 -> 0 bytes
 bin/BAT/Utilities.class                                                                    | Bin 4580 -> 0 bytes
 bin/BAT/testng.xml                                                                         |  19 -----
 pom.xml                                                                                    |  84 ----------------------
 src/main/resources/mac/driver/chromedriver                                                 | Bin 12093844 -> 0 bytes
 src/test/java/BAT/CheckElementsOnToggle.java                                               |  81 ----------------------
 src/test/java/BAT/FindingeventsTest.java                                                   |  61 ----------------
 src/test/java/BAT/JSTest.java                                                              |  54 ---------------
 src/test/java/BAT/LoginTest.java                                                           |  31 ---------
 src/test/java/BAT/Utilities.java                                                           | 242 ----------------------------------------------------------------
 src/test/java/BAT/isElementPresent.java                                                    |   5 --
 target/classes/main/resources/mac/driver/chromedriver                                      | Bin 12093844 -> 0 bytes
 target/classes/test/java/BAT/CheckElementsOnToggle.class                                   | Bin 2059 -> 0 bytes
 target/classes/test/java/BAT/FindingeventsTest.class                                       | Bin 2368 -> 0 bytes
 target/classes/test/java/BAT/JSTest.class                                                  | Bin 1923 -> 0 bytes
 target/classes/test/java/BAT/LoginTest.class                                               | Bin 1107 -> 0 bytes
 target/classes/test/java/BAT/Utilities.class                                               | Bin 8917 -> 0 bytes
 target/classes/test/java/BAT/isElementPresent.class                                        | Bin 301 -> 0 bytes
 target/maven-archiver/pom.properties                                                       |   5 --
 target/maven-status/maven-compiler-plugin/compile/default-compile/createdFiles.lst         |   0
 target/maven-status/maven-compiler-plugin/compile/default-compile/inputFiles.lst           |   6 --
 target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/createdFiles.lst |   6 --
 target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/inputFiles.lst   |   4 --
 target/scalyr-automation-0.0.1-SNAPSHOT.jar                                                | Bin 7243 -> 0 bytes
 target/surefire-reports/BAT/CheckElementsOnToggle.html                                     |  84 ----------------------
 target/surefire-reports/BAT/CheckElementsOnToggle.properties                               |   1 -
 target/surefire-reports/BAT/CheckElementsOnToggle.xml                                      |   4 --
 target/surefire-reports/BAT/FindingeventsTest.html                                         |  94 -------------------------
 target/surefire-reports/BAT/FindingeventsTest.properties                                   |   1 -
 target/surefire-reports/BAT/FindingeventsTest.xml                                          |   6 --
 target/surefire-reports/BAT/JSTest.html                                                    |  84 ----------------------
 target/surefire-reports/BAT/JSTest.properties                                              |   1 -
 target/surefire-reports/BAT/JSTest.xml                                                     |   4 --
 target/surefire-reports/BAT/LoginTest.html                                                 |  84 ----------------------
 target/surefire-reports/BAT/LoginTest.properties                                           |   1 -
 target/surefire-reports/BAT/LoginTest.xml                                                  |   4 --
 target/surefire-reports/BAT/classes.html                                                   |  80 ---------------------
 target/surefire-reports/BAT/groups.html                                                    |   1 -
 target/surefire-reports/BAT/index.html                                                     |   6 --
 target/surefire-reports/BAT/main.html                                                      |   2 -
 target/surefire-reports/BAT/methods-alphabetical.html                                      |  24 -------
 target/surefire-reports/BAT/methods-not-run.html                                           |   2 -
 target/surefire-reports/BAT/methods.html                                                   |  24 -------
 target/surefire-reports/BAT/reporter-output.html                                           |   1 -
 target/surefire-reports/BAT/testng-failed.xml                                              |  14 ----
 target/surefire-reports/BAT/testng.xml.html                                                |   1 -
 target/surefire-reports/BAT/toc.html                                                       |  46 -------------
 target/surefire-reports/Command line suite/Command line test.html                          |  99 --------------------------
 target/surefire-reports/Command line suite/Command line test.properties                    |   1 -
 target/surefire-reports/Command line suite/Command line test.xml                           |   7 --
 target/surefire-reports/Command line suite/classes.html                                    |  76 --------------------
 target/surefire-reports/Command line suite/groups.html                                     |   1 -
 target/surefire-reports/Command line suite/index.html                                      |   6 --
 target/surefire-reports/Command line suite/main.html                                       |   2 -
 target/surefire-reports/Command line suite/methods-alphabetical.html                       |  24 -------
 target/surefire-reports/Command line suite/methods-not-run.html                            |   2 -
 target/surefire-reports/Command line suite/methods.html                                    |  24 -------
 target/surefire-reports/Command line suite/reporter-output.html                            |   1 -
 target/surefire-reports/Command line suite/testng-failed.xml                               |  27 --------
 target/surefire-reports/Command line suite/testng.xml.html                                 |   1 -
 target/surefire-reports/Command line suite/toc.html                                        |  30 --------
 target/surefire-reports/TEST-TestSuite.xml                                                 |  75 --------------------
 target/surefire-reports/TestSuite.txt                                                      |   4 --
 target/surefire-reports/emailable-report.html                                              |  61 ----------------
 target/surefire-reports/index.html                                                         |   9 ---
 target/surefire-reports/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml          |   5 --
 target/surefire-reports/junitreports/TEST-test.java.BAT.FindingeventsTest.xml              |   7 --
 target/surefire-reports/junitreports/TEST-test.java.BAT.JSTest.xml                         |   5 --
 target/surefire-reports/junitreports/TEST-test.java.BAT.LoginTest.xml                      |   5 --
 target/surefire-reports/testng-failed.xml                                                  |  14 ----
 target/surefire-reports/testng-results.xml                                                 |  43 ------------
 target/surefire-reports/testng.css                                                         |   9 ---
 target/test-classes/test/java/BAT/CheckElementsOnToggle.class                              | Bin 2059 -> 0 bytes
 target/test-classes/test/java/BAT/FindingeventsTest.class                                  | Bin 2427 -> 0 bytes
 target/test-classes/test/java/BAT/JSTest.class                                             | Bin 1901 -> 0 bytes
 target/test-classes/test/java/BAT/LoginTest.class                                          | Bin 1107 -> 0 bytes
 target/test-classes/test/java/BAT/Utilities.class                                          | Bin 8542 -> 0 bytes
 target/test-classes/test/java/BAT/isElementPresent.class                                   | Bin 301 -> 0 bytes
 test-output/BAT/CheckElementsOnToggle.html                                                 |  71 -------------------
 test-output/BAT/CheckElementsOnToggle.xml                                                  |   4 --
 test-output/BAT/FindingeventsTest.html                                                     | 322 -------------------------------------------------------------------------------------
 test-output/BAT/FindingeventsTest.xml                                                      |  46 -------------
 test-output/BAT/JSTest.html                                                                | 248 -----------------------------------------------------------------
 test-output/BAT/JSTest.xml                                                                 |  43 ------------
 test-output/BAT/LoginTest.html                                                             |  84 ----------------------
 test-output/BAT/LoginTest.xml                                                              |   5 --
 test-output/BAT/testng-failed.xml                                                          |  27 --------
 test-output/Default suite/Default test.html                                                | 295 -----------------------------------------------------------------------------
 test-output/Default suite/Default test.xml                                                 |  69 -------------------
 test-output/Default suite/testng-failed.xml                                                |  14 ----
 test-output/bullet_point.png                                                               | Bin 356 -> 0 bytes
 test-output/collapseall.gif                                                                | Bin 157 -> 0 bytes
 test-output/emailable-report.html                                                          | 117 -------------------------------
 test-output/failed.png                                                                     | Bin 977 -> 0 bytes
 test-output/index.html                                                                     | 289 ----------------------------------------------------------------------------
 test-output/jquery-1.7.1.min.js                                                            |   4 --
 test-output/junitreports/TEST-BAT.FindingeventsTest.xml                                    |   5 --
 test-output/junitreports/TEST-BAT.JSTest.xml                                               |   6 --
 test-output/junitreports/TEST-BAT.LoginTest.xml                                            |   5 --
 test-output/junitreports/TEST-FindingeventsTest.xml                                        |   5 --
 test-output/junitreports/TEST-JSTest.xml                                                   |   6 --
 test-output/junitreports/TEST-LoginTest.xml                                                |   5 --
 test-output/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml                      |  69 -------------------
 test-output/junitreports/TEST-test.java.BAT.FindingeventsTest.xml                          |  71 -------------------
 test-output/junitreports/TEST-test.java.BAT.JSTest.xml                                     |  68 ------------------
 test-output/junitreports/TEST-test.java.BAT.LoginTest.xml                                  |  36 ----------
 test-output/navigator-bullet.png                                                           | Bin 352 -> 0 bytes
 test-output/old/BAT/CheckElementsOnToggle.properties                                       |   1 -
 test-output/old/BAT/FindingeventsTest.properties                                           |   1 -
 test-output/old/BAT/JSTest.properties                                                      |   1 -
 test-output/old/BAT/LoginTest.properties                                                   |   1 -
 test-output/old/BAT/classes.html                                                           |  54 ---------------
 test-output/old/BAT/groups.html                                                            |   1 -
 test-output/old/BAT/index.html                                                             |   6 --
 test-output/old/BAT/main.html                                                              |   2 -
 test-output/old/BAT/methods-alphabetical.html                                              |  14 ----
 test-output/old/BAT/methods-not-run.html                                                   |   2 -
 test-output/old/BAT/methods.html                                                           |  14 ----
 test-output/old/BAT/reporter-output.html                                                   |   1 -
 test-output/old/BAT/testng.xml.html                                                        |   1 -
 test-output/old/BAT/toc.html                                                               |  46 -------------
 test-output/old/Default suite/Default test.properties                                      |   1 -
 test-output/old/Default suite/classes.html                                                 |  28 --------
 test-output/old/Default suite/groups.html                                                  |   1 -
 test-output/old/Default suite/index.html                                                   |   6 --
 test-output/old/Default suite/main.html                                                    |   2 -
 test-output/old/Default suite/methods-alphabetical.html                                    |   8 ---
 test-output/old/Default suite/methods-not-run.html                                         |   2 -
 test-output/old/Default suite/methods.html                                                 |   8 ---
 test-output/old/Default suite/reporter-output.html                                         |   1 -
 test-output/old/Default suite/testng.xml.html                                              |   1 -
 test-output/old/Default suite/toc.html                                                     |  30 --------
 test-output/old/index.html                                                                 |   9 ---
 test-output/passed.png                                                                     | Bin 1019 -> 0 bytes
 test-output/skipped.png                                                                    | Bin 967 -> 0 bytes
 test-output/testng-failed.xml                                                              |  14 ----
 test-output/testng-reports.css                                                             | 309 ---------------------------------------------------------------------------------
 test-output/testng-reports.js                                                              | 122 --------------------------------
 test-output/testng-results.xml                                                             | 151 ----------------------------------------
 test-output/testng.css                                                                     |   9 ---
 testng.xml                                                                                 |  19 -----
 145 files changed, 33 insertions(+), 4485 deletions(-)
 delete mode 100644 bin/.DS_Store
 delete mode 100644 bin/BAT/FindingeventsTest.class
 delete mode 100644 bin/BAT/JSTest.class
 delete mode 100644 bin/BAT/LoginTest.class
 delete mode 100644 bin/BAT/Utilities.class
 delete mode 100644 bin/BAT/testng.xml
 delete mode 100644 pom.xml
 delete mode 100755 src/main/resources/mac/driver/chromedriver
 delete mode 100644 src/test/java/BAT/CheckElementsOnToggle.java
 delete mode 100644 src/test/java/BAT/FindingeventsTest.java
 delete mode 100644 src/test/java/BAT/JSTest.java
 delete mode 100644 src/test/java/BAT/LoginTest.java
 delete mode 100644 src/test/java/BAT/Utilities.java
 delete mode 100644 src/test/java/BAT/isElementPresent.java
 delete mode 100644 target/classes/main/resources/mac/driver/chromedriver
 delete mode 100644 target/classes/test/java/BAT/CheckElementsOnToggle.class
 delete mode 100644 target/classes/test/java/BAT/FindingeventsTest.class
 delete mode 100644 target/classes/test/java/BAT/JSTest.class
 delete mode 100644 target/classes/test/java/BAT/LoginTest.class
 delete mode 100644 target/classes/test/java/BAT/Utilities.class
 delete mode 100644 target/classes/test/java/BAT/isElementPresent.class
 delete mode 100644 target/maven-archiver/pom.properties
 delete mode 100644 target/maven-status/maven-compiler-plugin/compile/default-compile/createdFiles.lst
 delete mode 100644 target/maven-status/maven-compiler-plugin/compile/default-compile/inputFiles.lst
 delete mode 100644 target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/createdFiles.lst
 delete mode 100644 target/maven-status/maven-compiler-plugin/testCompile/default-testCompile/inputFiles.lst
 delete mode 100644 target/scalyr-automation-0.0.1-SNAPSHOT.jar
 delete mode 100644 target/surefire-reports/BAT/CheckElementsOnToggle.html
 delete mode 100644 target/surefire-reports/BAT/CheckElementsOnToggle.properties
 delete mode 100644 target/surefire-reports/BAT/CheckElementsOnToggle.xml
 delete mode 100644 target/surefire-reports/BAT/FindingeventsTest.html
 delete mode 100644 target/surefire-reports/BAT/FindingeventsTest.properties
 delete mode 100644 target/surefire-reports/BAT/FindingeventsTest.xml
 delete mode 100644 target/surefire-reports/BAT/JSTest.html
 delete mode 100644 target/surefire-reports/BAT/JSTest.properties
 delete mode 100644 target/surefire-reports/BAT/JSTest.xml
 delete mode 100644 target/surefire-reports/BAT/LoginTest.html
 delete mode 100644 target/surefire-reports/BAT/LoginTest.properties
 delete mode 100644 target/surefire-reports/BAT/LoginTest.xml
 delete mode 100644 target/surefire-reports/BAT/classes.html
 delete mode 100644 target/surefire-reports/BAT/groups.html
 delete mode 100644 target/surefire-reports/BAT/index.html
 delete mode 100644 target/surefire-reports/BAT/main.html
 delete mode 100644 target/surefire-reports/BAT/methods-alphabetical.html
 delete mode 100644 target/surefire-reports/BAT/methods-not-run.html
 delete mode 100644 target/surefire-reports/BAT/methods.html
 delete mode 100644 target/surefire-reports/BAT/reporter-output.html
 delete mode 100644 target/surefire-reports/BAT/testng-failed.xml
 delete mode 100644 target/surefire-reports/BAT/testng.xml.html
 delete mode 100644 target/surefire-reports/BAT/toc.html
 delete mode 100644 target/surefire-reports/Command line suite/Command line test.html
 delete mode 100644 target/surefire-reports/Command line suite/Command line test.properties
 delete mode 100644 target/surefire-reports/Command line suite/Command line test.xml
 delete mode 100644 target/surefire-reports/Command line suite/classes.html
 delete mode 100644 target/surefire-reports/Command line suite/groups.html
 delete mode 100644 target/surefire-reports/Command line suite/index.html
 delete mode 100644 target/surefire-reports/Command line suite/main.html
 delete mode 100644 target/surefire-reports/Command line suite/methods-alphabetical.html
 delete mode 100644 target/surefire-reports/Command line suite/methods-not-run.html
 delete mode 100644 target/surefire-reports/Command line suite/methods.html
 delete mode 100644 target/surefire-reports/Command line suite/reporter-output.html
 delete mode 100644 target/surefire-reports/Command line suite/testng-failed.xml
 delete mode 100644 target/surefire-reports/Command line suite/testng.xml.html
 delete mode 100644 target/surefire-reports/Command line suite/toc.html
 delete mode 100644 target/surefire-reports/TEST-TestSuite.xml
 delete mode 100644 target/surefire-reports/TestSuite.txt
 delete mode 100644 target/surefire-reports/emailable-report.html
 delete mode 100644 target/surefire-reports/index.html
 delete mode 100644 target/surefire-reports/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml
 delete mode 100644 target/surefire-reports/junitreports/TEST-test.java.BAT.FindingeventsTest.xml
 delete mode 100644 target/surefire-reports/junitreports/TEST-test.java.BAT.JSTest.xml
 delete mode 100644 target/surefire-reports/junitreports/TEST-test.java.BAT.LoginTest.xml
 delete mode 100644 target/surefire-reports/testng-failed.xml
 delete mode 100644 target/surefire-reports/testng-results.xml
 delete mode 100644 target/surefire-reports/testng.css
 delete mode 100644 target/test-classes/test/java/BAT/CheckElementsOnToggle.class
 delete mode 100644 target/test-classes/test/java/BAT/FindingeventsTest.class
 delete mode 100644 target/test-classes/test/java/BAT/JSTest.class
 delete mode 100644 target/test-classes/test/java/BAT/LoginTest.class
 delete mode 100644 target/test-classes/test/java/BAT/Utilities.class
 delete mode 100644 target/test-classes/test/java/BAT/isElementPresent.class
 delete mode 100644 test-output/BAT/CheckElementsOnToggle.html
 delete mode 100644 test-output/BAT/CheckElementsOnToggle.xml
 delete mode 100644 test-output/BAT/FindingeventsTest.html
 delete mode 100644 test-output/BAT/FindingeventsTest.xml
 delete mode 100644 test-output/BAT/JSTest.html
 delete mode 100644 test-output/BAT/JSTest.xml
 delete mode 100644 test-output/BAT/LoginTest.html
 delete mode 100644 test-output/BAT/LoginTest.xml
 delete mode 100644 test-output/BAT/testng-failed.xml
 delete mode 100644 test-output/Default suite/Default test.html
 delete mode 100644 test-output/Default suite/Default test.xml
 delete mode 100644 test-output/Default suite/testng-failed.xml
 delete mode 100644 test-output/bullet_point.png
 delete mode 100644 test-output/collapseall.gif
 delete mode 100644 test-output/emailable-report.html
 delete mode 100644 test-output/failed.png
 delete mode 100644 test-output/index.html
 delete mode 100644 test-output/jquery-1.7.1.min.js
 delete mode 100644 test-output/junitreports/TEST-BAT.FindingeventsTest.xml
 delete mode 100644 test-output/junitreports/TEST-BAT.JSTest.xml
 delete mode 100644 test-output/junitreports/TEST-BAT.LoginTest.xml
 delete mode 100644 test-output/junitreports/TEST-FindingeventsTest.xml
 delete mode 100644 test-output/junitreports/TEST-JSTest.xml
 delete mode 100644 test-output/junitreports/TEST-LoginTest.xml
 delete mode 100644 test-output/junitreports/TEST-test.java.BAT.CheckElementsOnToggle.xml
 delete mode 100644 test-output/junitreports/TEST-test.java.BAT.FindingeventsTest.xml
 delete mode 100644 test-output/junitreports/TEST-test.java.BAT.JSTest.xml
 delete mode 100644 test-output/junitreports/TEST-test.java.BAT.LoginTest.xml
 delete mode 100644 test-output/navigator-bullet.png
 delete mode 100644 test-output/old/BAT/CheckElementsOnToggle.properties
 delete mode 100644 test-output/old/BAT/FindingeventsTest.properties
 delete mode 100644 test-output/old/BAT/JSTest.properties
 delete mode 100644 test-output/old/BAT/LoginTest.properties
 delete mode 100644 test-output/old/BAT/classes.html
 delete mode 100644 test-output/old/BAT/groups.html
 delete mode 100644 test-output/old/BAT/index.html
 delete mode 100644 test-output/old/BAT/main.html
 delete mode 100644 test-output/old/BAT/methods-alphabetical.html
 delete mode 100644 test-output/old/BAT/methods-not-run.html
 delete mode 100644 test-output/old/BAT/methods.html
 delete mode 100644 test-output/old/BAT/reporter-output.html
 delete mode 100644 test-output/old/BAT/testng.xml.html
 delete mode 100644 test-output/old/BAT/toc.html
 delete mode 100644 test-output/old/Default suite/Default test.properties
 delete mode 100644 test-output/old/Default suite/classes.html
 delete mode 100644 test-output/old/Default suite/groups.html
 delete mode 100644 test-output/old/Default suite/index.html
 delete mode 100644 test-output/old/Default suite/main.html
 delete mode 100644 test-output/old/Default suite/methods-alphabetical.html
 delete mode 100644 test-output/old/Default suite/methods-not-run.html
 delete mode 100644 test-output/old/Default suite/methods.html
 delete mode 100644 test-output/old/Default suite/reporter-output.html
 delete mode 100644 test-output/old/Default suite/testng.xml.html
 delete mode 100644 test-output/old/Default suite/toc.html
 delete mode 100644 test-output/old/index.html
 delete mode 100644 test-output/passed.png
 delete mode 100644 test-output/skipped.png
 delete mode 100644 test-output/testng-failed.xml
 delete mode 100644 test-output/testng-reports.css
 delete mode 100644 test-output/testng-reports.js
 delete mode 100644 test-output/testng-results.xml
 delete mode 100644 test-output/testng.css
 delete mode 100644 testng.xml
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ git branch
  QA-28
* master
Sowmyas-MBP:qa sowmyaramani$ git checkout QA-28
Switched to branch 'QA-28'
Sowmyas-MBP:qa sowmyaramani$ git pull upstream master
From https://github.com/scalyr/qa
 * branch            master     -> FETCH_HEAD
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
Sowmyas-MBP:qa sowmyaramani$ git show
commit 59920798f7e4d16670bde53a666467c67be0b907 (HEAD -> QA-28)
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:40:41 2019 -0700

    QA-28 Updated README.md

diff --git a/README.md b/README.md
index f770c18..2ba043e 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,37 @@
 Welcome !!
 
+Guide
+=====
+Note: v1, created on 05/07/19. Verify and follow.
+1. Create a fork on github to the scalyr qa repo.
+2. Clone the fork to your local machine: git clone http://github.com/<userName>/qa.git
+3. cd qa
+4. Add a remote to the forked repo to keep your fork up-to-date: 
+git remote add upsteam https://githiub.com/scalyr/qa.git
+5. Verify new remote named upstream:
+git remote -v
+6. To update fork with latest changes:
+git fetch upsteam
+7. Checkout the master branch
+git checkout master
+8. Create a ticket to track your changesi. Include ticket number in commet message.
+git branch <newFeature> 
+9. git checkout <newFeature>
+10. Make your changes
+11. git commit
+12. git fetch upstream
+13. git checkout master
+14. git merge upstream/master
+15. git checkout <newFeature>
+16. git rebase master
+17. git checkout
+18. git rebase -i master
Sowmyas-MBP:qa sowmyaramani$ git revert
usage: git revert [<options>] <commit-ish>...
   or: git revert <subcommand>

    --quit                end revert or cherry-pick sequence
    --continue            resume revert or cherry-pick sequence
    --abort               cancel revert or cherry-pick sequence
    -n, --no-commit       don't automatically commit
    -e, --edit            edit the commit message
    -s, --signoff         add Signed-off-by:
    -m, --mainline <parent-number>
                          select mainline parent
    --rerere-autoupdate   update the index with reused conflict resolution if possible
    --strategy <strategy>
                          merge strategy
    -X, --strategy-option <option>
                          option for merge strategy
    -S, --gpg-sign[=<key-id>]
                          GPG sign commit

Sowmyas-MBP:qa sowmyaramani$ git git checkout
git: 'git' is not a git command. See 'git --help'.

The most similar command is
	init
Sowmyas-MBP:qa sowmyaramani$ git checkout
README.md: needs merge
error: you need to resolve your current index first
Sowmyas-MBP:qa sowmyaramani$ git diff
diff --cc README.md
index 2ba043e,6c36c1d..0000000
--- a/README.md
+++ b/README.md
@@@ -18,20 -18,18 +18,36 @@@ git checkout maste
  git branch <newFeature> 
  9. git checkout <newFeature>
  10. Make your changes
++<<<<<<< HEAD
 +11. git commit
 +12. git fetch upstream
 +13. git checkout master
 +14. git merge upstream/master
 +15. git checkout <newFeature>
 +16. git rebase master
 +17. git checkout
 +18. git rebase -i master
 +19. git push origin <newFeature> //ensure you are on feature branch
 +19. GitHub -> Page for <userName>/qa. Select branch. Click "Pull Request"
 +20. Repo owner: 
 +a. Review/ test Pull Request
 +b. Ask questions/ get more changes/finalize
 +c. Merge Pull Request
 +21. After confirming that the pull request is merged successfully, delete the feature branch: 
++=======
+ 11. git fetch upstream
+ 12. git checkout master
+ 13. git merge upstream/master
+ 14. git checkout <newFeature>
+ 15. git rebase master
+ 16. git checkout
+ 17. git rebase -i master
+ 18. GitHub -> Page for <userName>/qa. Select branch. Click "Pull Request"
+ 19. Repo owner: 
+ a. Review/ test Pluu Request
+ b. Ask questions/ get more changes/finalize
+ c. Merge Pull Request
+ 20. AFter confirming that the pull request ismerged successfully, delete the feature branch: 
++>>>>>>> 572ead844e1736cbd1f8872780b7264a98cfdc7e
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git diff
diff --cc README.md
index 2ba043e,6c36c1d..0000000
--- a/README.md
+++ b/README.md
@@@ -18,20 -18,18 +18,19 @@@ git checkout maste
  git branch <newFeature> 
  9. git checkout <newFeature>
  10. Make your changes
- 11. git commit
- 12. git fetch upstream
- 13. git checkout master
- 14. git merge upstream/master
- 15. git checkout <newFeature>
- 16. git rebase master
- 17. git checkout
- 18. git rebase -i master
- 19. git push origin <newFeature> //ensure you are on feature branch
- 19. GitHub -> Page for <userName>/qa. Select branch. Click "Pull Request"
- 20. Repo owner: 
- a. Review/ test Pull Request
+ 11. git fetch upstream
+ 12. git checkout master
+ 13. git merge upstream/master
+ 14. git checkout <newFeature>
+ 15. git rebase master
+ 16. git checkout
+ 17. git rebase -i master
+ 18. GitHub -> Page for <userName>/qa. Select branch. Click "Pull Request"
+ 19. Repo owner: 
+ a. Review/ test Pluu Request
  b. Ask questions/ get more changes/finalize
  c. Merge Pull Request
- 21. After confirming that the pull request is merged successfully, delete the feature branch: 
+ 20. AFter confirming that the pull request ismerged successfully, delete the feature branch: 
++>>>>>>> 572ead844e1736cbd1f8872780b7264a98cfdc7e
  git branch -d <newFeature>
  
Sowmyas-MBP:qa sowmyaramani$ git rebase master
README.md: needs merge
Cannot rebase: You have unstaged changes.
Additionally, your index contains uncommitted changes.
Please commit or stash them.
Sowmyas-MBP:qa sowmyaramani$ git stash A
usage: git stash list [<options>]
   or: git stash show [<stash>]
   or: git stash drop [-q|--quiet] [<stash>]
   or: git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
   or: git stash branch <branchname> [<stash>]
   or: git stash save [--patch] [-k|--[no-]keep-index] [-q|--quiet]
		      [-u|--include-untracked] [-a|--all] [<message>]
   or: git stash [push [--patch] [-k|--[no-]keep-index] [-q|--quiet]
		       [-u|--include-untracked] [-a|--all] [-m <message>]
		       [-- <pathspec>...]]
   or: git stash clear
Sowmyas-MBP:qa sowmyaramani$ history
  118  cd src
  119  ls
  120  vd main
  121  ls
  122  cd main
  123  ls
  124  cd java
  125  ls
  126  cd com
  127  ls
  128  cd sca
  129  ls
  130  cd scalyr/
  131  ls
  132  cd annotations/
  133  ls
  134  vi AnnotationsApplication.java 
  135  cd ..
  136  ls
  137  cd ../..
  138  ls
  139  cd ../..
  140  ls
  141  cd ../..
  142  ls
  143  cd ScalyrSite
  144  ls
  145  cd tools
  146  ls
  147  cd documentationIndexer/
  148  ls
  149  cd ..
  150  ls
  151  cd ..
  152  ls
  153  cd src
  154  ls
  155  cd com
  156  ls
  157  cd scalyr/
  158  ls
  159  cd grpc/
  160  ls
  161  cd ../..
  162  ls
  163  cd ../..
  164  ls
  165  cd ..
  166  find . -name scalyr-config
  167  find ./* -name scalyr-config
  168  ls
  169  cd ScalyrSite
  170  ls
  171  cd ..
  172  ls
  173  cd ..
  174  ls
  175  cd ..
  176  ls
  177  cd ..
  178  ls
  179  cd Documents
  180  ls
  181  cd ..
  182  ls
  183  cd Documents
  184  ls
  185  ls
  186  cd Documents/
  187  ls
  188  cd GitHub/
  189  ls
  190  vd scalyr/
  191  ls
  192  cd scalyr/
  193  ls
  194  cd InternalTools/
  195  ls
  196  cd src
  197  ls
  198  cd main
  199  ls
  200  cd java
  201  ls
  202   cd com
  203  ls
  204  cd scalyr/
  205  ls
  206  cd internaltools/
  207  ls
  208  ls
  209  cd ../../../..
  210  ls
  211  cd ../..
  212  ls
  213  cd ..
  214  ls
  215  cd ScalyrSite
  216  ls
  217  cd src
  218  lscd mai
  219  ls
  220  cd com
  221  ls
  222  cd sca
  223  ls
  224  cd scalyr
  225  ls
  226  exit
  227  exit
  228  pwd
  229  ls
  230  cd Documents/GitHub/
  231  ls
  232  cd scv
  233  find . -name less
  234  find . -name global.less
  235  vi ./scalyr/ScalyrSite2/WebRoot/src/styles/global.less 
  236  grep -i none-hint *
  237  grep -i none-hint ./*
  238  grep -ir none-hint ./*
  239  grep -irl none-hint ./*
  240  ./scalyr/ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogLinesContainer/slyLogLinesContainer.html
  241  ./scalyr/ScalyrSite2/WebRoot/src/js/scalyr/pages/labs/labsPage.html
  242  ./scalyr/ScalyrSite2/WebRoot/src/js/scalyr/pages/distribution/distributionPage.html
  243  ./scalyr/ScalyrSite2/WebRoot/src/js/scalyr/pages/searchGraph/searchGraphPage.html
  244  ./scalyr/ScalyrSite2/WebRoot/src/styles/global.less
  245  ls
  246  cd Îøcuments
  247  cd Documents
  248  ks
  249  ls
  250  cd GitHub
  251  ls
  252  cd scalyr
  253  ls
  254  cd ScalyrSite2
  255  ls
  256  cd WebRoot
  257  ls
  258  cd pages
  259  ls
  260  cd ..
  261  ls
  262  cd common
  263  ls
  264  cd ..
  265  ls
  266  cd src
  267  ls
  268  cd js
  269  ls
  270  cd scalyr
  271  ls
  272  cd ..
  273  ls
  274  ls
  275  cd scalyr
  276  ls
  277  cd controllers
  278  ls
  279  ls
  280  cd Documents/
  281  ls
  282  cd GitHub/
  283  ls
  284  cd scalyr/
  285  ls
  286  git pull
  287  ls
  288  cd Documents
  289  ls
  290  cd GitHub
  291  ls
  292  cd sca
  293  cd scalyr/
  294  ls
  295  cd SCalySite2
  296  cd ScalyrSite2
  297  l
  298  ls
  299  cd WebRoot
  300  ls
  301  cd src/js
  302  ls
  303  cd scalyr
  304  ls
  305  cd pages
  306  ls
  307  cd searchLogs/
  308  ls
  309  vi searchLogsPage.js
  310  vi searchLogsPage.js
  311  grep -il updateDisoplaySettings *
  312  grep -il updateDisplaySettings *
  313  cd ..
  314  ls
  315  pwd
  316  cd ../dialogs
  317  ls
  318  grep -il updateDisplaySettings *
  319  ls
  320  pwd
  321  cd ..
  322  ls
  323  cd pages
  324  ls
  325  cd logOverview/
  326  ls
  327  vi logOverviewPage.js 
  328  cd ..
  329  ls
  330  cd searchLogs
  331  ls
  332  vi searchLogsPage.js
  333  cd configFiles
  334  ls
  335  cd ..
  336  ls
  337  cd configFiles/
  338  ls
  339  vi configFiles.js
  340  grep -i butterService
  341  grep -i butterService *
  342  history | grep gulp
  343  pwd
  344  cd../../../../..
  345  ls
  346  cd ..
  347  ls
  348  cd ..
  349  ls
  350  cd ..
  351  ls
  352  cd ..
  353  ls
  354  cd ..
  355  ls
  356  cd ..
  357  pwd
  358  cd ../ScalyrSite
  359  ls
  360  grep ScalyrSite2 pom.xml
  361  vi pom.xml
  362  vi pom.xml
  363  pwd
  364  cd ../ScalyrSite2
  365  ls
  366  vi gulpfile.babel.es6
  367  pwd
  368  ls
  369  find -name core
  370  find ./-name core
  371  find ./-name ScalySite2
  372  pwd
  373  cd ..
  374  find ./-name ScalySite2
  375  find ./-name ScalyrSite2
  376  find ./ -name ScalyrSite2
  377  find ./ -name core.ts
  378  vi ScalyrSite2/WebRoot/src/js/slang/core.ts
  379  pwd
  380  cd ScalyrSite2
  381  ls
  382  cd util
  383  ls
  384  ./parseURL.js 'https://logstaging.scalyr.com/events?barWidth=5%20minutes&color=%23d68c1e&color2=%23fd0000&color3=%23b542a0&endTime=1556728895606&facet=rate&facet2=rate&facet3=rate&filter=($status%20%3E%3D%20500%20$status%20%3C%20600)%20($serverHost%20contains%20%22prod-queue%22)&filter2=(($status%20%3E%3D%20500%20%26%26%20$status%20%3C%20600))%20($serverHost%20contains%20%22prod-log%22)%20($tag%20!%3D%20%22monitorResult%22)&filter3=($status%20%3E%3D%20500%20$status%20%3C%20600)%20($serverHost%20contains%20%22prod-front%22)&graphStyle=stacked_bar&label=Prod-Queue&label2=Prod-Log&label3=Prod-Front&mode=graph&numPlots=3&severity=0&severity2=0&severity3=0&startTime=1556714495607&teamToken=6Y50vk1fJluVCZ4jQS5kxA--'
  385  =
  386  pwd
  387  ls
  388  cd Documents/
  389  lks
  390  ls
  391  cd GitHub/
  392  ls
  393  cd scalyr/
  394  ls
  395  cd ScalyrSite2
  396  ls
  397  pwd
  398  ls
  399  cd util
  400  ls
  401  history
  402  ./parseURL.js 'https://logstaging.scalyr.com/events?filter=(tag%3D%27rateLimiterBucket%27%20%7C%7C%20tag%3D%27concurrencyLimiterBucket%27%20%7C%7C%20tag%3D%27valueLimiterBucket%27)%20!($key%20contains%20%22unfrozenEventsForAccount%2FAAAAAE9KObmtQN6u%22)%20!($key%20contains%20%22unfrozenEventsForAccount%2FAAAAAHJCzwPsA7gl%22)%20!($key%20contains%20%22unfrozenEventsForAccount%2FAAAAAG1YOLLxXZWv%22)%20!($key%20contains%20%22unfrozenEventsForAccount%2F%22)%20!(key%20contains%20%27query%27)%20!(key%20contains%20%27rate_limit_by_user%2Flogin%27)%20$key%20%3D%3D%20%22session_creation_by_user%2FAAAAAGQbk9epxfyd%22&mode=graph&graphStyle=line&color=%238EC8C6&teamToken=6Y50vk1fJluVCZ4jQS5kxA--&breakdownFacet=serverHost&startTime=1556721005790000000&style=detail&endTime=1556742605790355648&yScale=linear&facet=max(value)'
  403  ls
  404  cd Downloads/
  405  ls
  406  cd 
  407  ls
  408   cd Documents
  409  ls
  410  cd GitHub/
  411  ls
  412  cd scalyr/
  413  ls
  414  vi pom.xml
  415  ls
  416  cd ScalyrSite2
  417  cd ../ScalyrSite
  418  ls
  419  cd target
  420  ls
  421  cd ScalyrSite
  422  ls
  423  ls
  424  pwd
  425  ls
  426  cd s2
  427  ls
  428  pwd
  429  cd src
  430  ls
  431  cd js
  432  ls
  433  cd scalyr
  434  ls
  435  cd pages
  436  ls
  437  cd logOverview/
  438  ls
  439  pwd
  440  cd ../../../../..
  441  ls
  442  pwd
  443  cd ../..
  444  ls
  445  cd ScalyrSite/src/
  446  ls
  447  cd ..
  448  ls
  449  pwd
  450  cd src/com/
  451  ls
  452  cd scalyr/
  453  ls
  454  cd server
  455  ls
  456  vi DefaultServlet.java 
  457  pwd
  458  cd Git
  459  ls
  460  cd Documents/GitHub/
  461  ls
  462  cd scalyr/
  463  ls
  464  git log
  465  exit
  466  cd Documents/
  467  ls
  468  cd GitHub
  469  ls
  470  cd  scalyr/
  471  ls
  472  history | grep clone
  473  cd ..
  474  ls
  475  pwd
  476  history | grep clone
  477  git log
  478  cd scalyr/
  479  ls
  480  git log
  481  cd Documents/
  482  ls
  483  cd GitHub
  484  ls
  485  cd  scalyr/
  486  ls
  487  history | grep clone
  488  cd ..
  489  ls
  490  pwd
  491  history | grep clone
  492  git log
  493  cd scalyr/
  494  ls
  495  git log
  496  ls
  497  pwd
  498  git log
  499  !
  500  pwd
  501  pwd
  502  cd Documents/
  503  cd GitHub/
  504  ls
  505  cd scalyr/
  506  ls
  507  cd ..
  508  ls
  509  git clone http://github.com/sowmyaramani/qa.git
  510  git clone http://github.com/sowmyaramani/qa.git
  511  ls
  512  git remote add upstream https://github.com/scalyr/qa.git
  513  pwd
  514  git remote -v
  515  git remote add upstream https://github.com/scalyr/qa
  516  ls -a
  517  cd qa
  518  ls
  519  vi .git
  520  git remote add upstream https://github.com/scalyr/qa.git
  521  git remote -v
  522  git checkout -b QA-28
  523  ls
  524  ls bin
  525  ls bin/BAT
  526  ls bin/pom.xml
  527  vi pom.xml 
  528  ls
  529  git rm pom.xml
  530  git rm -r bin
  531  git rm -r src
  532  git rm -r target
  533  ls
  534  git rm -r test-output/
  535  ls
  536  vi testng.xml 
  537  git rm -r testng.xml 
  538  ls
  539  vi README.md
  540  vi README.md
  541  pwd
  542  cp README.md /Users/sowmyaramani/Documents/
  543  ls
  544  git revert
  545  man git revert
  546  vi README.md
  547  git branch
  548  vi README.md
  549  ls
  550  git fetch upstream
  551  git checkout master
  552  git merge upstream/master
  553  git checkout QA-28
  554  git rebase master
  555  git commit
  556  git fetch upstream
  557  git checkout master
  558  git merge upstream/master
  559  git checkout QA-28
  560  git rebase master
  561  git show
  562  ls
  563  git add README.md 
  564  git commit
  565  git rebase master
  566  git checkout
  567  git branch
  568  git rebase -i master
  569  ls
  570  git branch
  571  git checkout master
  572  ls
  573  git checkout QA-28
  574  git branch
  575  git push origin QA-28
  576  vi README.md 
  577  git commit
  578  git add README.md 
  579  git commit
  580  git fetch upstream
  581  git checkout master
  582  git merge upstream/master
  583  git checkout QA-28
  584  git rebase master
  585  git checkout
  586  git rebase -i master
  587  git branch
  588  git push origin QA-28
  589  git Sowmyas-MBP:qa sowmyaramani$ git checkout master
  590  Switched to branch 'master'
  591  Your branch is up to date with 'origin/master'.
  592  git revert
  593  git show
  594  !
  595  git show logs
  596  git log
  597  !
  598  :q!
  599  ls
  600  pwd
  601  git branch
  602  git checkout master
  603  git pull upstream master
  604  ls
  605  git branch
  606  git checkout QA-28
  607  git pull upstream master
  608  git show
  609  git revert
  610  git git checkout
  611  git checkout
  612  git diff
  613  vi README.md 
  614  git diff
  615  git rebase master
  616  git stash A
  617  history
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28
  master
Sowmyas-MBP:qa sowmyaramani$ git branch --help
Sowmyas-MBP:qa sowmyaramani$ git push -f -d origin QA-28
warning: redirecting to https://github.com/sowmyaramani/qa.git/
error: unable to delete 'QA-28': remote ref does not exist
error: failed to push some refs to 'http://github.com/sowmyaramani/qa.git'
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28
  master
Sowmyas-MBP:qa sowmyaramani$ git branch -m QA-28 QA-28-1
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28-1
  master
Sowmyas-MBP:qa sowmyaramani$ git show
commit 59920798f7e4d16670bde53a666467c67be0b907 (HEAD -> QA-28-1)
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:40:41 2019 -0700

    QA-28 Updated README.md

diff --git a/README.md b/README.md
index f770c18..2ba043e 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,37 @@
 Welcome !!
 
+Guide
+=====
+Note: v1, created on 05/07/19. Verify and follow.
+1. Create a fork on github to the scalyr qa repo.
+2. Clone the fork to your local machine: git clone http://github.com/<userName>/qa.git
+3. cd qa
+4. Add a remote to the forked repo to keep your fork up-to-date: 
+git remote add upsteam https://githiub.com/scalyr/qa.git
+5. Verify new remote named upstream:
+git remote -v
+6. To update fork with latest changes:
+git fetch upsteam
+7. Checkout the master branch
+git checkout master
+8. Create a ticket to track your changesi. Include ticket number in commet message.
+git branch <newFeature> 
+9. git checkout <newFeature>
+10. Make your changes
+11. git commit
+12. git fetch upstream
+13. git checkout master
+14. git merge upstream/master
+15. git checkout <newFeature>
+16. git rebase master
+17. git checkout
+18. git rebase -i master
+19. git push origin <newFeature> //ensure you are on feature branch
+19. GitHub -> Page for <userName>/qa. Select branch. Click "Pull Request"
+20. Repo owner: 
+a. Review/ test Pull Request
+b. Ask questions/ get more changes/finalize
+c. Merge Pull Request
+21. After confirming that the pull request is merged successfully, delete the feature branch: 
+git branch -d <newFeature>
+
Sowmyas-MBP:qa sowmyaramani$ !
-bash: syntax error near unexpected token `newline'
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28-1
  master
Sowmyas-MBP:qa sowmyaramani$ git add README.md 
Sowmyas-MBP:qa sowmyaramani$ git commit
[QA-28-1 8c41b05] Merge branch 'master' of https://github.com/scalyr/qa into QA-28
Sowmyas-MBP:qa sowmyaramani$ cd .git
Sowmyas-MBP:.git sowmyaramani$ ls
COMMIT_EDITMSG	HEAD		config		hooks		info		objects		refs
FETCH_HEAD	ORIG_HEAD	description	index		logs		packed-refs
Sowmyas-MBP:.git sowmyaramani$ ls -a
.		COMMIT_EDITMSG	HEAD		config		hooks		info		objects		refs
..		FETCH_HEAD	ORIG_HEAD	description	index		logs		packed-refs
Sowmyas-MBP:.git sowmyaramani$ vi config 
Sowmyas-MBP:.git sowmyaramani$ vi config 
Sowmyas-MBP:.git sowmyaramani$ git checkout
fatal: this operation must be run in a work tree
Sowmyas-MBP:.git sowmyaramani$ cd ..
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ git show
commit 8c41b0535809ff6d6de66f1770942b6b438c2608 (HEAD -> QA-28-1)
Merge: 5992079 572ead8
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:08:49 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa into QA-28

diff --cc README.md
index 2ba043e,6c36c1d..ad2093f
--- a/README.md
+++ b/README.md
@@@ -2,36 -2,34 +2,44 @@@ Welcome !
  
  Guide
  =====
--Note: v1, created on 05/07/19. Verify and follow.
++Note: v1.*, created/updated on 05/07/19. Verify and follow.
++
  1. Create a fork on github to the scalyr qa repo.
--2. Clone the fork to your local machine: git clone http://github.com/<userName>/qa.git
--3. cd qa
++2. Clone the fork to your local machine: 
++>git clone http://github.com/<userName>/qa.git
++
++3. > cd qa
  4. Add a remote to the forked repo to keep your fork up-to-date: 
--git remote add upsteam https://githiub.com/scalyr/qa.git
++>git remote add upsteam https://githiub.com/scalyr/qa.git
++
  5. Verify new remote named upstream:
--git remote -v
++> git remote -v
++
  6. To update fork with latest changes:
--git fetch upsteam
++> git fetch upsteam
++
  7. Checkout the master branch
--git checkout master
++> git checkout master
++
  8. Create a ticket to track your changesi. Include ticket number in commet message.
--git branch <newFeature> 
--9. git checkout <newFeature>
--10. Make your changes
- 11. git commit
- 12. git fetch upstream
- 13. git checkout master
- 14. git merge upstream/master
- 15. git checkout <newFeature>
- 16. git rebase master
- 17. git checkout
- 18. git rebase -i master
- 19. git push origin <newFeature> //ensure you are on feature branch
- 19. GitHub -> Page for <userName>/qa. Select branch. Click "Pull Request"
- 20. Repo owner: 
 -11. git fetch upstream
 -12. git checkout master
 -13. git merge upstream/master
 -14. git checkout <newFeature>
 -15. git rebase master
 -16. git checkout
 -17. git rebase -i master
++> git branch <newFeature> 
++
++9. > git checkout <newFeature>
++10. Make your changes and commit them. 
++> git add/rm <file(s)/dir(s)>
++> git commit
++11. > git fetch upstream
++12. > git checkout master
++13. > git merge upstream/master
++14. > git checkout <newFeature>
++15. > git rebase master
++16. > git checkout
++17. > git rebase -i master
+ 18. GitHub -> Page for <userName>/qa. Select branch. Click "Pull Request"
+ 19. Repo owner: 
 -a. Review/ test Pluu Request
 +a. Review/ test Pull Request
  b. Ask questions/ get more changes/finalize
  c. Merge Pull Request
- 21. After confirming that the pull request is merged successfully, delete the feature branch: 
 -20. AFter confirming that the pull request ismerged successfully, delete the feature branch: 
--git branch -d <newFeature>
++20. After confirming that the pull request is merged successfully, delete the feature branch: 
++> git branch -d <newFeature>
  
Sowmyas-MBP:qa sowmyaramani$ git status
On branch QA-28-1
nothing to commit, working tree clean
Sowmyas-MBP:qa sowmyaramani$ git commit README.md 
On branch QA-28-1
nothing to commit, working tree clean
Sowmyas-MBP:qa sowmyaramani$ git push origin QA-28-1
warning: redirecting to https://github.com/sowmyaramani/qa.git/
Counting objects: 11, done.
Delta compression using up to 12 threads.
Compressing objects: 100% (11/11), done.
Writing objects: 100% (11/11), 2.41 KiB | 2.41 MiB/s, done.
Total 11 (delta 6), reused 0 (delta 0)
remote: Resolving deltas: 100% (6/6), completed with 1 local object.
remote: 
remote: Create a pull request for 'QA-28-1' on GitHub by visiting:
remote:      https://github.com/sowmyaramani/qa/pull/new/QA-28-1
remote: 
To http://github.com/sowmyaramani/qa.git
 * [new branch]      QA-28-1 -> QA-28-1
Sowmyas-MBP:qa sowmyaramani$ git pull upstream master
From https://github.com/scalyr/qa
 * branch            master     -> FETCH_HEAD
Already up to date.
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28-1
  master
Sowmyas-MBP:qa sowmyaramani$ git checkout -b sowmyaramani-QA-28-1 master
Switched to a new branch 'sowmyaramani-QA-28-1'
Sowmyas-MBP:qa sowmyaramani$ git pull https://github.com/sowmyaramani/qa.git QA-28-1
From https://github.com/sowmyaramani/qa
 * branch            QA-28-1    -> FETCH_HEAD
Updating 572ead8..8c41b05
Fast-forward
 README.md | 50 ++++++++++++++++++++++++++++++--------------------
 1 file changed, 30 insertions(+), 20 deletions(-)
Sowmyas-MBP:qa sowmyaramani$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
Sowmyas-MBP:qa sowmyaramani$ git merge --no-ff sowmyaramani-QA-28-1
Merge made by the 'recursive' strategy.
 README.md | 50 ++++++++++++++++++++++++++++++--------------------
 1 file changed, 30 insertions(+), 20 deletions(-)
Sowmyas-MBP:qa sowmyaramani$ git push origin master
warning: redirecting to https://github.com/sowmyaramani/qa.git/
Counting objects: 1, done.
Writing objects: 100% (1/1), 227 bytes | 227.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To http://github.com/sowmyaramani/qa.git
   294b533..1a962de  master -> master
Sowmyas-MBP:qa sowmyaramani$ ls-a
-bash: ls-a: command not found
Sowmyas-MBP:qa sowmyaramani$ ls -a
.		..		.DS_Store	.classpath	.git		.project	.settings	README.md
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ cd ..
Sowmyas-MBP:GitHub sowmyaramani$ ls
microservices-demo-master	qa				scalyr
Sowmyas-MBP:GitHub sowmyaramani$ git checkout master
fatal: not a git repository (or any of the parent directories): .git
Sowmyas-MBP:GitHub sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub
Sowmyas-MBP:GitHub sowmyaramani$ cd qa
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ git checkout master
M	README.md
Already on 'master'
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:qa sowmyaramani$ git push -delete QA-28-1
error: did you mean `--delete` (with two dashes ?)
Sowmyas-MBP:qa sowmyaramani$ git push --delete QA-28-1
fatal: --delete doesn't make sense without any refs
Sowmyas-MBP:qa sowmyaramani$ git push -delete origin QA-28-1
error: did you mean `--delete` (with two dashes ?)
Sowmyas-MBP:qa sowmyaramani$ git push --delete origin QA-28-1
warning: redirecting to https://github.com/sowmyaramani/qa.git/
To http://github.com/sowmyaramani/qa.git
 - [deleted]         QA-28-1
Sowmyas-MBP:qa sowmyaramani$ git branch
  QA-28-1
* master
  sowmyaramani-QA-28-1
Sowmyas-MBP:qa sowmyaramani$ git pull upstream master
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (1/1), done.
From https://github.com/scalyr/qa
 * branch            master     -> FETCH_HEAD
   572ead8..cf9868e  master     -> upstream/master
Already up to date!
Merge made by the 'recursive' strategy.
Sowmyas-MBP:qa sowmyaramani$ git branch
  QA-28-1
* master
  sowmyaramani-QA-28-1
Sowmyas-MBP:qa sowmyaramani$ vi .git
Sowmyas-MBP:qa sowmyaramani$ vi .git
Sowmyas-MBP:qa sowmyaramani$ vi .git
Sowmyas-MBP:qa sowmyaramani$ git checkout
M	README.md
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)
Sowmyas-MBP:qa sowmyaramani$ git push origin master
warning: redirecting to https://github.com/sowmyaramani/qa.git/
Counting objects: 2, done.
Delta compression using up to 12 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 863 bytes | 863.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0)
To http://github.com/sowmyaramani/qa.git
   1a962de..c2e2dbf  master -> master
Sowmyas-MBP:qa sowmyaramani$ git checkout
M	README.md
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:qa sowmyaramani$ git show
commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439 (HEAD -> master, origin/master, origin/HEAD)
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

Sowmyas-MBP:qa sowmyaramani$ git branch
  QA-28-1
* master
  sowmyaramani-QA-28-1
Sowmyas-MBP:qa sowmyaramani$ git branch -d QA-28-1
Deleted branch QA-28-1 (was 8c41b05).
Sowmyas-MBP:qa sowmyaramani$ git branch -d sowmyaramani-QA-28-1
Deleted branch sowmyaramani-QA-28-1 (was 8c41b05).
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git pull upstream master
From https://github.com/scalyr/qa
 * branch            master     -> FETCH_HEAD
Already up to date.
Sowmyas-MBP:qa sowmyaramani$ git checkout -b QA-28-2
M	README.md
Switched to a new branch 'QA-28-2'
Sowmyas-MBP:qa sowmyaramani$ git checkout QA-28-2
M	README.md
Already on 'QA-28-2'
Sowmyas-MBP:qa sowmyaramani$ ls -a
.		..		.DS_Store	.classpath	.git		.project	.settings	README.md
Sowmyas-MBP:qa sowmyaramani$ git rm .DS
fatal: pathspec '.DS' did not match any files
Sowmyas-MBP:qa sowmyaramani$ git rm .DS_Store 
rm '.DS_Store'
Sowmyas-MBP:qa sowmyaramani$ git rm .classpath 
rm '.classpath'
Sowmyas-MBP:qa sowmyaramani$ ls -al
total 16
drwxr-xr-x   6 sowmyaramani  staff   192 May  7 12:32 .
drwxr-xr-x   5 sowmyaramani  staff   160 May  7 08:07 ..
drwxr-xr-x  15 sowmyaramani  staff   480 May  7 12:32 .git
-rw-r--r--   1 sowmyaramani  staff   546 May  7 08:07 .project
drwxr-xr-x   6 sowmyaramani  staff   192 May  7 08:07 .settings
-rw-r--r--   1 sowmyaramani  staff  1250 May  7 12:25 README.md
Sowmyas-MBP:qa sowmyaramani$ vi .project 
Sowmyas-MBP:qa sowmyaramani$ vi .settings/
Sowmyas-MBP:qa sowmyaramani$ git rm .settings/
fatal: not removing '.settings/' recursively without -r
Sowmyas-MBP:qa sowmyaramani$ git rm -r .settings/
rm '.settings/org.eclipse.core.resources.prefs'
rm '.settings/org.eclipse.jdt.core.prefs'
rm '.settings/org.eclipse.m2e.core.prefs'
rm '.settings/org.testng.eclipse.maven.prefs'
Sowmyas-MBP:qa sowmyaramani$ git rm .project 
rm '.project'
Sowmyas-MBP:qa sowmyaramani$ ls -a
.		..		.git		README.md
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git show
commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439 (HEAD -> QA-28-2, origin/master, origin/HEAD, master)
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git show
commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439 (HEAD -> QA-28-2, origin/master, origin/HEAD, master)
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

Sowmyas-MBP:qa sowmyaramani$ git log
commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439 (HEAD -> QA-28-2, origin/master, origin/HEAD, master)
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

commit cf9868e13058df216abd5549a21c215b7d850f2c (upstream/master)
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 12:23:23 2019 -0700

    Merge pull request #2 from sowmyaramani/QA-28-1
    
    Qa 28 1

commit 1a962deb85f9fe72110d8409954fc00d24ac80cc
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:20:20 2019 -0700

    Changing README.md

commit 8c41b0535809ff6d6de66f1770942b6b438c2608
Merge: 5992079 572ead8
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:08:49 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa into QA-28

commit 572ead844e1736cbd1f8872780b7264a98cfdc7e
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 11:49:08 2019 -0700

    Qa 28 (#1)
    
    * QA-28 Removing old QA files.
    
    * QA-28 Updated README.md

commit 59920798f7e4d16670bde53a666467c67be0b907
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:40:41 2019 -0700

    QA-28 Updated README.md

commit 565c9cc92461021e466b9844e009fe56ef81e1ff
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:38:29 2019 -0700

    QA-28 Removing old QA files.

commit 294b53326aaaf777d1c231c6e794680ff80703d6
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git add README.md 
Sowmyas-MBP:qa sowmyaramani$ git show
commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439 (HEAD -> QA-28-2, origin/master, origin/HEAD, master)
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

Sowmyas-MBP:qa sowmyaramani$ git show:q!
git: 'show:q!' is not a git command. See 'git --help'.
Sowmyas-MBP:qa sowmyaramani$ git log
commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439 (HEAD -> QA-28-2, origin/master, origin/HEAD, master)
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

commit cf9868e13058df216abd5549a21c215b7d850f2c (upstream/master)
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 12:23:23 2019 -0700

    Merge pull request #2 from sowmyaramani/QA-28-1
    
    Qa 28 1

commit 1a962deb85f9fe72110d8409954fc00d24ac80cc
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:20:20 2019 -0700

    Changing README.md

commit 8c41b0535809ff6d6de66f1770942b6b438c2608
Merge: 5992079 572ead8
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:08:49 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa into QA-28

commit 572ead844e1736cbd1f8872780b7264a98cfdc7e
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 11:49:08 2019 -0700

    Qa 28 (#1)
    
    * QA-28 Removing old QA files.
    
    * QA-28 Updated README.md

commit 59920798f7e4d16670bde53a666467c67be0b907
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:40:41 2019 -0700

    QA-28 Updated README.md

commit 565c9cc92461021e466b9844e009fe56ef81e1ff
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:38:29 2019 -0700

    QA-28 Removing old QA files.

commit 294b53326aaaf777d1c231c6e794680ff80703d6
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub/qa
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git status
On branch QA-28-2
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	deleted:    .DS_Store
	deleted:    .classpath
	deleted:    .project
	deleted:    .settings/org.eclipse.core.resources.prefs
	deleted:    .settings/org.eclipse.jdt.core.prefs
	deleted:    .settings/org.eclipse.m2e.core.prefs
	deleted:    .settings/org.testng.eclipse.maven.prefs
	modified:   README.md

Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git show
commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439 (HEAD -> QA-28-2, origin/master, origin/HEAD, master)
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

Sowmyas-MBP:qa sowmyaramani$ git commit
[QA-28-2 4fc9f91] QA-28 : Removing hidden files and updating README formatting issues.
 8 files changed, 8 insertions(+), 76 deletions(-)
 delete mode 100644 .DS_Store
 delete mode 100644 .classpath
 delete mode 100644 .project
 delete mode 100644 .settings/org.eclipse.core.resources.prefs
 delete mode 100644 .settings/org.eclipse.jdt.core.prefs
 delete mode 100644 .settings/org.eclipse.m2e.core.prefs
 delete mode 100644 .settings/org.testng.eclipse.maven.prefs
Sowmyas-MBP:qa sowmyaramani$ git remote -v
origin	http://github.com/sowmyaramani/qa.git (fetch)
origin	http://github.com/sowmyaramani/qa.git (push)
upstream	https://github.com/scalyr/qa.git (fetch)
upstream	https://github.com/scalyr/qa.git (push)
Sowmyas-MBP:qa sowmyaramani$ git fetch upstream
Sowmyas-MBP:qa sowmyaramani$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:qa sowmyaramani$ git merge upstream/master
Already up to date.
Sowmyas-MBP:qa sowmyaramani$ git branch
  QA-28-2
* master
Sowmyas-MBP:qa sowmyaramani$ git checkout QA-28-2
Switched to branch 'QA-28-2'
Sowmyas-MBP:qa sowmyaramani$ git rebase master
Current branch QA-28-2 is up to date.
Sowmyas-MBP:qa sowmyaramani$ git checkout -i master
error: unknown switch `i'
usage: git checkout [<options>] <branch>
   or: git checkout [<options>] [<branch>] -- <file>...

    -q, --quiet           suppress progress reporting
    -b <branch>           create and checkout a new branch
    -B <branch>           create/reset and checkout a branch
    -l                    create reflog for new branch
    --detach              detach HEAD at named commit
    -t, --track           set upstream info for new branch
    --orphan <new-branch>
                          new unparented branch
    -2, --ours            checkout our version for unmerged files
    -3, --theirs          checkout their version for unmerged files
    -f, --force           force checkout (throw away local modifications)
    -m, --merge           perform a 3-way merge with the new branch
    --overwrite-ignore    update ignored files (default)
    --conflict <style>    conflict style (merge or diff3)
    -p, --patch           select hunks interactively
    --ignore-skip-worktree-bits
                          do not limit pathspecs to sparse entries only
    --ignore-other-worktrees
                          do not check if another worktree is holding the given ref
    --recurse-submodules[=<checkout>]
                          control recursive updating of submodules
    --progress            force progress reporting

Sowmyas-MBP:qa sowmyaramani$ git rebase -i master
Successfully rebased and updated refs/heads/QA-28-2.
Sowmyas-MBP:qa sowmyaramani$ more README.md 
Welcome !!

Guide
=====
Note: v1.*, created/updated on 05/07/19. Verify and follow.

1. Create a fork on github to the scalyr qa repo.
2. Clone the fork to your local machine: 
>git clone http://github.com/(userName)/qa.git

3. > cd qa
4. Add a remote to the forked repo to keep your fork up-to-date: 
>git remote add upsteam https://github.com/scalyr/qa.git

5. Verify new remote named upstream:
> git remote -v

6. To update fork with latest changes:
> git fetch upsteam

7. Checkout the master branch
> git checkout master

8. Create a ticket to track your changesi. Include ticket number in commet message.
> git branch (newFeature) 

9. > git checkout (newFeature)
10. Make your changes and commit them. 
> git add/rm (file(s)/dir(s))
> git commit
11. > git fetch upstream
12. > git checkout master
13. > git merge upstream/master
14. > git checkout (newFeature)
15. > git rebase master
16. > git checkout
17. > git rebase -i master
18. On GitHub, find page for (userName)/qa. Select branch. Create Pull Request.
19. Repo owner: 
a. Review/ test Pull Request
b. Ask questions/ get more changes/finalize
c. Merge Pull Request
20. After confirming that the pull request is merged successfully, delete the feature branch: 
> git branch -d (newFeature)

Sowmyas-MBP:qa sowmyaramani$ git log
commit 4fc9f914378fa4773485cd4bb8ddf773cf01336e (HEAD -> QA-28-2)
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 13:14:14 2019 -0700

    QA-28 : Removing hidden files and updating README formatting issues.

commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439 (origin/master, origin/HEAD, master)
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

commit cf9868e13058df216abd5549a21c215b7d850f2c (upstream/master)
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 12:23:23 2019 -0700

    Merge pull request #2 from sowmyaramani/QA-28-1
    
    Qa 28 1

commit 1a962deb85f9fe72110d8409954fc00d24ac80cc
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:20:20 2019 -0700

    Changing README.md

commit 8c41b0535809ff6d6de66f1770942b6b438c2608
Merge: 5992079 572ead8
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:08:49 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa into QA-28

commit 572ead844e1736cbd1f8872780b7264a98cfdc7e
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 11:49:08 2019 -0700

    Qa 28 (#1)
    
    * QA-28 Removing old QA files.
    
    * QA-28 Updated README.md

commit 59920798f7e4d16670bde53a666467c67be0b907
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:40:41 2019 -0700

    QA-28 Updated README.md

commit 565c9cc92461021e466b9844e009fe56ef81e1ff
Sowmyas-MBP:qa sowmyaramani$ !
-bash: syntax error near unexpected token `newline'
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git log
commit 4fc9f914378fa4773485cd4bb8ddf773cf01336e (HEAD -> QA-28-2)
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 13:14:14 2019 -0700

    QA-28 : Removing hidden files and updating README formatting issues.

commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439 (origin/master, origin/HEAD, master)
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

commit cf9868e13058df216abd5549a21c215b7d850f2c (upstream/master)
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 12:23:23 2019 -0700

    Merge pull request #2 from sowmyaramani/QA-28-1
    
    Qa 28 1

commit 1a962deb85f9fe72110d8409954fc00d24ac80cc
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:20:20 2019 -0700

    Changing README.md

commit 8c41b0535809ff6d6de66f1770942b6b438c2608
Merge: 5992079 572ead8
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:08:49 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa into QA-28

commit 572ead844e1736cbd1f8872780b7264a98cfdc7e
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 11:49:08 2019 -0700

    Qa 28 (#1)
    
    * QA-28 Removing old QA files.
    
    * QA-28 Updated README.md

commit 59920798f7e4d16670bde53a666467c67be0b907
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:40:41 2019 -0700

    QA-28 Updated README.md

commit 565c9cc92461021e466b9844e009fe56ef81e1ff
Sowmyas-MBP:qa sowmyaramani$ git log
commit 4fc9f914378fa4773485cd4bb8ddf773cf01336e (HEAD -> QA-28-2)
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 13:14:14 2019 -0700

    QA-28 : Removing hidden files and updating README formatting issues.

commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439 (origin/master, origin/HEAD, master)
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

commit cf9868e13058df216abd5549a21c215b7d850f2c (upstream/master)
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 12:23:23 2019 -0700

    Merge pull request #2 from sowmyaramani/QA-28-1
    
    Qa 28 1

commit 1a962deb85f9fe72110d8409954fc00d24ac80cc
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:20:20 2019 -0700

    Changing README.md

commit 8c41b0535809ff6d6de66f1770942b6b438c2608
Merge: 5992079 572ead8
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:08:49 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa into QA-28

commit 572ead844e1736cbd1f8872780b7264a98cfdc7e
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 11:49:08 2019 -0700

    Qa 28 (#1)
    
    * QA-28 Removing old QA files.
    
    * QA-28 Updated README.md

commit 59920798f7e4d16670bde53a666467c67be0b907
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 08:40:41 2019 -0700

    QA-28 Updated README.md

commit 565c9cc92461021e466b9844e009fe56ef81e1ff
Sowmyas-MBP:qa sowmyaramani$ !
-bash: syntax error near unexpected token `newline'
Sowmyas-MBP:qa sowmyaramani$ history
  233  find . -name less
  234  find . -name global.less
  235  vi ./scalyr/ScalyrSite2/WebRoot/src/styles/global.less 
  236  grep -i none-hint *
  237  grep -i none-hint ./*
  238  grep -ir none-hint ./*
  239  grep -irl none-hint ./*
  240  ./scalyr/ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogLinesContainer/slyLogLinesContainer.html
  241  ./scalyr/ScalyrSite2/WebRoot/src/js/scalyr/pages/labs/labsPage.html
  242  ./scalyr/ScalyrSite2/WebRoot/src/js/scalyr/pages/distribution/distributionPage.html
  243  ./scalyr/ScalyrSite2/WebRoot/src/js/scalyr/pages/searchGraph/searchGraphPage.html
  244  ./scalyr/ScalyrSite2/WebRoot/src/styles/global.less
  245  ls
  246  cd Îøcuments
  247  cd Documents
  248  ks
  249  ls
  250  cd GitHub
  251  ls
  252  cd scalyr
  253  ls
  254  cd ScalyrSite2
  255  ls
  256  cd WebRoot
  257  ls
  258  cd pages
  259  ls
  260  cd ..
  261  ls
  262  cd common
  263  ls
  264  cd ..
  265  ls
  266  cd src
  267  ls
  268  cd js
  269  ls
  270  cd scalyr
  271  ls
  272  cd ..
  273  ls
  274  ls
  275  cd scalyr
  276  ls
  277  cd controllers
  278  ls
  279  ls
  280  cd Documents/
  281  ls
  282  cd GitHub/
  283  ls
  284  cd scalyr/
  285  ls
  286  git pull
  287  ls
  288  cd Documents
  289  ls
  290  cd GitHub
  291  ls
  292  cd sca
  293  cd scalyr/
  294  ls
  295  cd SCalySite2
  296  cd ScalyrSite2
  297  l
  298  ls
  299  cd WebRoot
  300  ls
  301  cd src/js
  302  ls
  303  cd scalyr
  304  ls
  305  cd pages
  306  ls
  307  cd searchLogs/
  308  ls
  309  vi searchLogsPage.js
  310  vi searchLogsPage.js
  311  grep -il updateDisoplaySettings *
  312  grep -il updateDisplaySettings *
  313  cd ..
  314  ls
  315  pwd
  316  cd ../dialogs
  317  ls
  318  grep -il updateDisplaySettings *
  319  ls
  320  pwd
  321  cd ..
  322  ls
  323  cd pages
  324  ls
  325  cd logOverview/
  326  ls
  327  vi logOverviewPage.js 
  328  cd ..
  329  ls
  330  cd searchLogs
  331  ls
  332  vi searchLogsPage.js
  333  cd configFiles
  334  ls
  335  cd ..
  336  ls
  337  cd configFiles/
  338  ls
  339  vi configFiles.js
  340  grep -i butterService
  341  grep -i butterService *
  342  history | grep gulp
  343  pwd
  344  cd../../../../..
  345  ls
  346  cd ..
  347  ls
  348  cd ..
  349  ls
  350  cd ..
  351  ls
  352  cd ..
  353  ls
  354  cd ..
  355  ls
  356  cd ..
  357  pwd
  358  cd ../ScalyrSite
  359  ls
  360  grep ScalyrSite2 pom.xml
  361  vi pom.xml
  362  vi pom.xml
  363  pwd
  364  cd ../ScalyrSite2
  365  ls
  366  vi gulpfile.babel.es6
  367  pwd
  368  ls
  369  find -name core
  370  find ./-name core
  371  find ./-name ScalySite2
  372  pwd
  373  cd ..
  374  find ./-name ScalySite2
  375  find ./-name ScalyrSite2
  376  find ./ -name ScalyrSite2
  377  find ./ -name core.ts
  378  vi ScalyrSite2/WebRoot/src/js/slang/core.ts
  379  pwd
  380  cd ScalyrSite2
  381  ls
  382  cd util
  383  ls
  384  ./parseURL.js 'https://logstaging.scalyr.com/events?barWidth=5%20minutes&color=%23d68c1e&color2=%23fd0000&color3=%23b542a0&endTime=1556728895606&facet=rate&facet2=rate&facet3=rate&filter=($status%20%3E%3D%20500%20$status%20%3C%20600)%20($serverHost%20contains%20%22prod-queue%22)&filter2=(($status%20%3E%3D%20500%20%26%26%20$status%20%3C%20600))%20($serverHost%20contains%20%22prod-log%22)%20($tag%20!%3D%20%22monitorResult%22)&filter3=($status%20%3E%3D%20500%20$status%20%3C%20600)%20($serverHost%20contains%20%22prod-front%22)&graphStyle=stacked_bar&label=Prod-Queue&label2=Prod-Log&label3=Prod-Front&mode=graph&numPlots=3&severity=0&severity2=0&severity3=0&startTime=1556714495607&teamToken=6Y50vk1fJluVCZ4jQS5kxA--'
  385  =
  386  pwd
  387  ls
  388  cd Documents/
  389  lks
  390  ls
  391  cd GitHub/
  392  ls
  393  cd scalyr/
  394  ls
  395  cd ScalyrSite2
  396  ls
  397  pwd
  398  ls
  399  cd util
  400  ls
  401  history
  402  ./parseURL.js 'https://logstaging.scalyr.com/events?filter=(tag%3D%27rateLimiterBucket%27%20%7C%7C%20tag%3D%27concurrencyLimiterBucket%27%20%7C%7C%20tag%3D%27valueLimiterBucket%27)%20!($key%20contains%20%22unfrozenEventsForAccount%2FAAAAAE9KObmtQN6u%22)%20!($key%20contains%20%22unfrozenEventsForAccount%2FAAAAAHJCzwPsA7gl%22)%20!($key%20contains%20%22unfrozenEventsForAccount%2FAAAAAG1YOLLxXZWv%22)%20!($key%20contains%20%22unfrozenEventsForAccount%2F%22)%20!(key%20contains%20%27query%27)%20!(key%20contains%20%27rate_limit_by_user%2Flogin%27)%20$key%20%3D%3D%20%22session_creation_by_user%2FAAAAAGQbk9epxfyd%22&mode=graph&graphStyle=line&color=%238EC8C6&teamToken=6Y50vk1fJluVCZ4jQS5kxA--&breakdownFacet=serverHost&startTime=1556721005790000000&style=detail&endTime=1556742605790355648&yScale=linear&facet=max(value)'
  403  ls
  404  cd Downloads/
  405  ls
  406  cd 
  407  ls
  408   cd Documents
  409  ls
  410  cd GitHub/
  411  ls
  412  cd scalyr/
  413  ls
  414  vi pom.xml
  415  ls
  416  cd ScalyrSite2
  417  cd ../ScalyrSite
  418  ls
  419  cd target
  420  ls
  421  cd ScalyrSite
  422  ls
  423  ls
  424  pwd
  425  ls
  426  cd s2
  427  ls
  428  pwd
  429  cd src
  430  ls
  431  cd js
  432  ls
  433  cd scalyr
  434  ls
  435  cd pages
  436  ls
  437  cd logOverview/
  438  ls
  439  pwd
  440  cd ../../../../..
  441  ls
  442  pwd
  443  cd ../..
  444  ls
  445  cd ScalyrSite/src/
  446  ls
  447  cd ..
  448  ls
  449  pwd
  450  cd src/com/
  451  ls
  452  cd scalyr/
  453  ls
  454  cd server
  455  ls
  456  vi DefaultServlet.java 
  457  pwd
  458  cd Git
  459  ls
  460  cd Documents/GitHub/
  461  ls
  462  cd scalyr/
  463  ls
  464  git log
  465  exit
  466  cd Documents/
  467  ls
  468  cd GitHub
  469  ls
  470  cd  scalyr/
  471  ls
  472  history | grep clone
  473  cd ..
  474  ls
  475  pwd
  476  history | grep clone
  477  git log
  478  cd scalyr/
  479  ls
  480  git log
  481  cd Documents/
  482  ls
  483  cd GitHub
  484  ls
  485  cd  scalyr/
  486  ls
  487  history | grep clone
  488  cd ..
  489  ls
  490  pwd
  491  history | grep clone
  492  git log
  493  cd scalyr/
  494  ls
  495  git log
  496  ls
  497  pwd
  498  git log
  499  !
  500  pwd
  501  pwd
  502  cd Documents/
  503  cd GitHub/
  504  ls
  505  cd scalyr/
  506  ls
  507  cd ..
  508  ls
  509  git clone http://github.com/sowmyaramani/qa.git
  510  git clone http://github.com/sowmyaramani/qa.git
  511  ls
  512  git remote add upstream https://github.com/scalyr/qa.git
  513  pwd
  514  git remote -v
  515  git remote add upstream https://github.com/scalyr/qa
  516  ls -a
  517  cd qa
  518  ls
  519  vi .git
  520  git remote add upstream https://github.com/scalyr/qa.git
  521  git remote -v
  522  git checkout -b QA-28
  523  ls
  524  ls bin
  525  ls bin/BAT
  526  ls bin/pom.xml
  527  vi pom.xml 
  528  ls
  529  git rm pom.xml
  530  git rm -r bin
  531  git rm -r src
  532  git rm -r target
  533  ls
  534  git rm -r test-output/
  535  ls
  536  vi testng.xml 
  537  git rm -r testng.xml 
  538  ls
  539  vi README.md
  540  vi README.md
  541  pwd
  542  cp README.md /Users/sowmyaramani/Documents/
  543  ls
  544  git revert
  545  man git revert
  546  vi README.md
  547  git branch
  548  vi README.md
  549  ls
  550  git fetch upstream
  551  git checkout master
  552  git merge upstream/master
  553  git checkout QA-28
  554  git rebase master
  555  git commit
  556  git fetch upstream
  557  git checkout master
  558  git merge upstream/master
  559  git checkout QA-28
  560  git rebase master
  561  git show
  562  ls
  563  git add README.md 
  564  git commit
  565  git rebase master
  566  git checkout
  567  git branch
  568  git rebase -i master
  569  ls
  570  git branch
  571  git checkout master
  572  ls
  573  git checkout QA-28
  574  git branch
  575  git push origin QA-28
  576  vi README.md 
  577  git commit
  578  git add README.md 
  579  git commit
  580  git fetch upstream
  581  git checkout master
  582  git merge upstream/master
  583  git checkout QA-28
  584  git rebase master
  585  git checkout
  586  git rebase -i master
  587  git branch
  588  git push origin QA-28
  589  git Sowmyas-MBP:qa sowmyaramani$ git checkout master
  590  Switched to branch 'master'
  591  Your branch is up to date with 'origin/master'.
  592  git revert
  593  git show
  594  !
  595  git show logs
  596  git log
  597  !
  598  :q!
  599  ls
  600  pwd
  601  git branch
  602  git checkout master
  603  git pull upstream master
  604  ls
  605  git branch
  606  git checkout QA-28
  607  git pull upstream master
  608  git show
  609  git revert
  610  git git checkout
  611  git checkout
  612  git diff
  613  vi README.md 
  614  git diff
  615  git rebase master
  616  git stash A
  617  history
  618  git branch
  619  git branch --help
  620  git push -f -d origin QA-28
  621  ls
  622  git branch
  623  git branch -m QA-28 QA-28-1
  624  git branch
  625  git show
  626  !
  627  vi README.md 
  628  git branch
  629  git add README.md 
  630  git commit
  631  cd .git
  632  ls
  633  ls -a
  634  vi config 
  635  vi config 
  636  git checkout
  637  cd ..
  638  ls
  639  git show
  640  git status
  641  git commit README.md 
  642  git push origin QA-28-1
  643  git pull upstream master
  644  git branch
  645  git checkout -b sowmyaramani-QA-28-1 master
  646  git pull https://github.com/sowmyaramani/qa.git QA-28-1
  647  git checkout master
  648  git merge --no-ff sowmyaramani-QA-28-1
  649  git push origin master
  650  ls-a
  651  ls -a
  652  vi README.md 
  653  cd ..
  654  ls
  655  git checkout master
  656  pwd
  657  cd qa
  658  ls
  659  git checkout master
  660  git push -delete QA-28-1
  661  git push --delete QA-28-1
  662  git push -delete origin QA-28-1
  663  git push --delete origin QA-28-1
  664  git branch
  665  git pull upstream master
  666  git branch
  667  vi .git
  668  vi .git
  669  vi .git
  670  git checkout
  671  git push origin master
  672  git checkout
  673  git show
  674  git branch
  675  git branch -d QA-28-1
  676  git branch -d sowmyaramani-QA-28-1
  677  ls
  678  vi README.md 
  679  git pull upstream master
  680  git checkout -b QA-28-2
  681  git checkout QA-28-2
  682  ls -a
  683  git rm .DS
  684  git rm .DS_Store 
  685  git rm .classpath 
  686  ls -al
  687  vi .project 
  688  vi .settings/
  689  git rm .settings/
  690  git rm -r .settings/
  691  git rm .project 
  692  ls -a
  693  vi README.md 
  694  git show
  695  vi README.md 
  696  git show
  697  git log
  698  ls
  699  vi README.md 
  700  git add README.md 
  701  git show
  702  git show:q!
  703  git log
  704  ls
  705  pwd
  706  ls
  707  vi README.md 
  708  vi README.md 
  709  vi README.md 
  710  vi README.md 
  711  git status
  712  vi README.md 
  713  git show
  714  git commit
  715  git remote -v
  716  git fetch upstream
  717  git checkout master
  718  git merge upstream/master
  719  git branch
  720  git checkout QA-28-2
  721  git rebase master
  722  git checkout -i master
  723  git rebase -i master
  724  more README.md 
  725  git log
  726  !
  727  ls
  728  vi README.md 
  729  git log
  730  git log
  731  !
  732  history
Sowmyas-MBP:qa sowmyaramani$ 
Sowmyas-MBP:qa sowmyaramani$ 
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28-2
  master
Sowmyas-MBP:qa sowmyaramani$ git push origin QA-28-2
warning: redirecting to https://github.com/sowmyaramani/qa.git/
Counting objects: 3, done.
Delta compression using up to 12 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 477 bytes | 477.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: 
remote: Create a pull request for 'QA-28-2' on GitHub by visiting:
remote:      https://github.com/sowmyaramani/qa/pull/new/QA-28-2
remote: 
To http://github.com/sowmyaramani/qa.git
 * [new branch]      QA-28-2 -> QA-28-2
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28-2
  master
Sowmyas-MBP:qa sowmyaramani$ git push --delete origin QA-28-2
warning: redirecting to https://github.com/sowmyaramani/qa.git/
error: unable to delete 'QA-28-2': remote ref does not exist
error: failed to push some refs to 'http://github.com/sowmyaramani/qa.git'
Sowmyas-MBP:qa sowmyaramani$ vi README.md 
Sowmyas-MBP:qa sowmyaramani$ git branch -d QA-28-2
error: Cannot delete branch 'QA-28-2' checked out at '/Users/sowmyaramani/Documents/GitHub/qa'
Sowmyas-MBP:qa sowmyaramani$ git branch
* QA-28-2
  master
Sowmyas-MBP:qa sowmyaramani$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:qa sowmyaramani$ git branch -d QA-28-2
error: The branch 'QA-28-2' is not fully merged.
If you are sure you want to delete it, run 'git branch -D QA-28-2'.
Sowmyas-MBP:qa sowmyaramani$ git branch -D QA-28-2
Deleted branch QA-28-2 (was 4fc9f91).
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ git branch
* master
Sowmyas-MBP:qa sowmyaramani$ git fetch upstream
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (1/1), done.
From https://github.com/scalyr/qa
   cf9868e..77720d1  master     -> upstream/master
Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ git pull upstream/master
fatal: 'upstream/master' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
Sowmyas-MBP:qa sowmyaramani$ vi .git
Sowmyas-MBP:qa sowmyaramani$ git pull upstream master
From https://github.com/scalyr/qa
 * branch            master     -> FETCH_HEAD
Removing .settings/org.testng.eclipse.maven.prefs
Removing .settings/org.eclipse.m2e.core.prefs
Removing .settings/org.eclipse.jdt.core.prefs
Removing .settings/org.eclipse.core.resources.prefs
Removing .project
Removing .classpath
Removing .DS_Store
Merge made by the 'recursive' strategy.
 .DS_Store                                  | Bin 6148 -> 0 bytes
 .classpath                                 |  21 ---------------------
 .project                                   |  23 -----------------------
 .settings/org.eclipse.core.resources.prefs |   4 ----
 .settings/org.eclipse.jdt.core.prefs       |  14 --------------
 .settings/org.eclipse.m2e.core.prefs       |   4 ----
 .settings/org.testng.eclipse.maven.prefs   |   2 --
 README.md                                  |  16 ++++++++--------
 8 files changed, 8 insertions(+), 76 deletions(-)
 delete mode 100644 .DS_Store
 delete mode 100644 .classpath
 delete mode 100644 .project
 delete mode 100644 .settings/org.eclipse.core.resources.prefs
 delete mode 100644 .settings/org.eclipse.jdt.core.prefs
 delete mode 100644 .settings/org.eclipse.m2e.core.prefs
 delete mode 100644 .settings/org.testng.eclipse.maven.prefs
Sowmyas-MBP:qa sowmyaramani$ git push origin master
warning: redirecting to https://github.com/sowmyaramani/qa.git/
Counting objects: 4, done.
Delta compression using up to 12 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 724 bytes | 724.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To http://github.com/sowmyaramani/qa.git
   c2e2dbf..4023433  master -> master
Sowmyas-MBP:qa sowmyaramani$ git log
commit 402343366cff1e728de7e927cb70894adb080fec (HEAD -> master, origin/master, origin/HEAD)
Merge: c2e2dbf 77720d1
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 13:37:57 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

commit 77720d1b16732b30e26b3819284d5b8b89674503 (upstream/master)
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 13:14:14 2019 -0700

    QA-28 : Removing hidden files and updating README formatting issues.

commit c2e2dbff1c1e4d6dbb2c74a6b721157acb163439
Merge: 1a962de cf9868e
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:27:51 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa

commit cf9868e13058df216abd5549a21c215b7d850f2c
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 12:23:23 2019 -0700

    Merge pull request #2 from sowmyaramani/QA-28-1
    
    Qa 28 1

commit 1a962deb85f9fe72110d8409954fc00d24ac80cc
Merge: 572ead8 8c41b05
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:20:20 2019 -0700

    Changing README.md

commit 8c41b0535809ff6d6de66f1770942b6b438c2608
Merge: 5992079 572ead8
Author: Sowmya Ramani <sowmya@scalyr.com>
Date:   Tue May 7 12:08:49 2019 -0700

    Merge branch 'master' of https://github.com/scalyr/qa into QA-28

commit 572ead844e1736cbd1f8872780b7264a98cfdc7e
Author: Sowmya Ramani <46501230+sowmyaramani@users.noreply.github.com>
Date:   Tue May 7 11:49:08 2019 -0700

    Qa 28 (#1)
    
    * QA-28 Removing old QA files.
    
    * QA-28 Updated README.md

Sowmyas-MBP:qa sowmyaramani$ ls
README.md
Sowmyas-MBP:qa sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub/qa
Sowmyas-MBP:qa sowmyaramani$ cd ../scalyr/
Sowmyas-MBP:scalyr sowmyaramani$ ls
InternalTools			Profiling			ScalyrSite			annotations			docker				spotbugs-security-include.xml
Jenkinsfile			README.md			ScalyrSite2			checkstyle-suppressions.xml	pom.xml
Jenkinsfile-shellcheck		ScalyrAgent			ScalyrTest			config				scripts
Sowmyas-MBP:scalyr sowmyaramani$ git fetch origin
Sowmyas-MBP:scalyr sowmyaramani$ git reset --hard origin/master
HEAD is now at 2ac0722229 Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-09T2012Z.master.93ee852532.jenkins.build991'
Sowmyas-MBP:scalyr sowmyaramani$ git log
commit 2ac07222298102c5a4817ce4f998fd642c5c8a59 (HEAD -> master, origin/master, origin/HEAD)
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Jan 9 20:13:24 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-09T2012Z.master.93ee852532.jenkins.build991'

commit 93ee85253249e059dd2fb197d4e1dceef0d377d2
Author: Oliver Hsu <oliver@scalyr.com>
Date:   Wed Jan 9 11:51:08 2019 -0800

    BACK-76 Delete derived epochs for disabled accounts (#2429)

commit cf61c2a22307bb34b5e263f22d7e308a6e5a7184
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Jan 9 11:47:51 2019 -0800

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-09T1946Z.master.e70f2f5405.jenkins.build988'

commit ea27771c3335ea0e53d8e43d66e56772d2b47bb9
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Jan 9 11:31:57 2019 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-09T1756Z.master.b949b6df98.jenkins.build982'

commit e70f2f5405b317ef00575192c514dc9ba3d1e42d
Author: jchiang <jchiang@scalyr.com>
Date:   Wed Jan 9 11:23:54 2019 -0800

    Added staging-log-18a to staging-log-18 inventory

commit bda920316b9c990ee2bc5d62223c36b10d607fe9
Author: jchiang <jchiang@scalyr.com>
Date:   Wed Jan 9 11:07:51 2019 -0800

    Added staging-log-22z to inventory

commit b4d7df01bc7be105dad0c385dcb46948c0006faf
Author: James Eberle <jim@scalyr.com>
Date:   Wed Jan 9 10:35:56 2019 -0800

    Do not update lastS3ArchiveTimeNs if account is currently blacklisted for archive (#2433)

commit 21ad324ed9bfdfdc79026861a9ae435098214854
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Jan 9 17:58:01 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-09T1756Z.master.b949b6df98.jenkins.build982'

commit b949b6df98434ab51c3302d92ac19f1719935228
Author: Shia <shia@scalyr.com>
Date:   Wed Jan 9 09:34:55 2019 -0800

    #API-76 Fix: Incorrect Order Of Logs in demo2 (#2434)
Sowmyas-MBP:scalyr sowmyaramani$ !
-bash: syntax error near unexpected token `newline'
Sowmyas-MBP:scalyr sowmyaramani$ git show
commit 2ac07222298102c5a4817ce4f998fd642c5c8a59 (HEAD -> master, origin/master, origin/HEAD)
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Jan 9 20:13:24 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-09T2012Z.master.93ee852532.jenkins.build991'

diff --git a/scripts/ansible/inventory/group_vars/qatesting b/scripts/ansible/inventory/group_vars/qatesting
index 21a0b843ae..ebbfc3fda2 100644
--- a/scripts/ansible/inventory/group_vars/qatesting
+++ b/scripts/ansible/inventory/group_vars/qatesting
@@ -10,4 +10,4 @@ credentialsFile: "credentials_us"
 trustrootSourceMachine: "qatesting-front-1.scalyr.com"
 keystoreName: "qatesting"
 writeLogsKeyName: "qatesting"
-scalyrSiteVersion: "scalyr-war.2019-01-09T1946Z.master.e70f2f5405.jenkins.build988"
+scalyrSiteVersion: "scalyr-war.2019-01-09T2012Z.master.93ee852532.jenkins.build991"
Sowmyas-MBP:scalyr sowmyaramani$ git branch
* master
Sowmyas-MBP:scalyr sowmyaramani$ git checkout
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:scalyr sowmyaramani$ ls
InternalTools			Profiling			ScalyrSite			annotations			docker				spotbugs-security-include.xml
Jenkinsfile			README.md			ScalyrSite2			checkstyle-suppressions.xml	pom.xml
Jenkinsfile-shellcheck		ScalyrAgent			ScalyrTest			config				scripts
Sowmyas-MBP:scalyr sowmyaramani$ cd ScalyrSite2
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ git log
commit 2ac07222298102c5a4817ce4f998fd642c5c8a59 (HEAD -> master, origin/master, origin/HEAD)
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Jan 9 20:13:24 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-09T2012Z.master.93ee852532.jenkins.build991'

commit 93ee85253249e059dd2fb197d4e1dceef0d377d2
Author: Oliver Hsu <oliver@scalyr.com>
Date:   Wed Jan 9 11:51:08 2019 -0800

    BACK-76 Delete derived epochs for disabled accounts (#2429)

commit cf61c2a22307bb34b5e263f22d7e308a6e5a7184
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Jan 9 11:47:51 2019 -0800

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-09T1946Z.master.e70f2f5405.jenkins.build988'

commit ea27771c3335ea0e53d8e43d66e56772d2b47bb9
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Jan 9 11:31:57 2019 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-09T1756Z.master.b949b6df98.jenkins.build982'

commit e70f2f5405b317ef00575192c514dc9ba3d1e42d
Author: jchiang <jchiang@scalyr.com>
Date:   Wed Jan 9 11:23:54 2019 -0800

    Added staging-log-18a to staging-log-18 inventory

commit bda920316b9c990ee2bc5d62223c36b10d607fe9
Author: jchiang <jchiang@scalyr.com>
Date:   Wed Jan 9 11:07:51 2019 -0800

    Added staging-log-22z to inventory

commit b4d7df01bc7be105dad0c385dcb46948c0006faf
Author: James Eberle <jim@scalyr.com>
Date:   Wed Jan 9 10:35:56 2019 -0800

    Do not update lastS3ArchiveTimeNs if account is currently blacklisted for archive (#2433)

commit 21ad324ed9bfdfdc79026861a9ae435098214854
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Jan 9 17:58:01 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-09T1756Z.master.b949b6df98.jenkins.build982'

commit b949b6df98434ab51c3302d92ac19f1719935228
Author: Shia <shia@scalyr.com>
Date:   Wed Jan 9 09:34:55 2019 -0800

    #API-76 Fix: Incorrect Order Of Logs in demo2 (#2434)
    
    * always schedule via timer in SimulatedLogFile#log
    
    * advance clock 1ms

commit 37f8b91fb4a1fa05e770b03eabd2300ee0ff4c95
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Jan 9 16:32:16 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-09T1631Z.master.9384d42646.jenkins.build980'

commit 9384d426462c33321b8bb2d87b15c9941dab24ed
Author: John Hart <john@scalyr.com>
Date:   Wed Jan 9 08:05:31 2019 -0800

    #BACK-433: again make freezer thread epochStructureLock wait specifically configurable (#2435)

commit e613e0c32bdf8f4150bb1aa7e5eacd32dd50e9bb
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Jan 9 03:30:26 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-09T0329Z.master.962c0d3264.jenkins.build978'

commit 962c0d326406fb7eb403547969041dbdd614eb34
Author: Alex Elent <alex@scalyr.com>
Date:   Tue Jan 8 18:15:25 2019 -0800

    OPS-1304: Enable native memory tracking for tomcat process

commit 50d423671f695cbbde18adb188856854ddbd716e
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Jan 9 00:01:07 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-08T2359Z.master.e7c514e242.jenkins.build975'

commit a09af56c3a33e7b19a580d71b42523fe3b03849c
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Tue Jan 8 15:53:59 2019 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-08T2328Z.master.8c4a44c173.jenkins.build972'

commit e7c514e242698aff7ee35138628d83cf1f0401ec
Author: Oliver Hsu <oliver@scalyr.com>
Date:   Tue Jan 8 15:38:53 2019 -0800

    BACK-319 Add knob to preferDirectDbForEpochRead when epoch exists in both DirectDb and EpochFile (#2431)

commit c187b359654c2f154089916fd12f01c22694304e
Author: steve-scalyr <steve@scalyr.com>
Date:   Tue Jan 8 15:37:31 2019 -0800

    Preliminary implementation sketch for queues to support delivery to multiple recipients (#2266)
    
    * Preliminary implementation sketch for queues to support delivery to multiple recipients
    
    * Comment tweaks to address PR feedback

commit 1cf571b827939515366c8d4ebd0e5600d97b612b
Author: steve-scalyr <steve@scalyr.com>
Date:   Tue Jan 8 15:34:32 2019 -0800

    Add lifetimes for ResultAspect classes... (#2396)
    
    * Add lifetimes for ResultAspect's ColumnEventDbQuerier and EventRepositoryQuerier (in support of the anticipated complex-query engine)
    
    * ping karma to 1.4.1
    
    * Reduce prod frontend Java heap by 500MB to 5000MB
    
    * add default jdk11 var to evaluate to false
    
    * OPS-654: enable jre11 on prod-log-77
    
    * Add additional comments to AccountStatisticsGenerator (#2385)
    
    * Remove runBootstrapPrechecks.py from bootstrap shell script, also add comment line so that scalyr-ops parses Overview and Description from prerequisites.yml
    
    * Use another ScalyrClient.HttpProxy method to proxy to service API (#2398)
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-18T2129Z.master.084299ab38.jenkins.build886'
    
    * Updated backup_to_s3.py
    
    * Fix heisen test (#2395)
    
    * Minor: Whitelist -> AccountWhitelist conversion
    
    * Fix test: default config not being honored, wut?
    
    * fix typing
    
    * Don't create freezer output buffer on slaves (#2402)
    
    * Don't create freezer output  buffer on slaves
    
    * Minor refactoring to address review feedback
    
    * OPS-654: Roll back all staging backends to jre8/pgc
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-19T1827Z.master.161701ddeb.jenkins.build893'
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-19T1853Z.master.b74621d9c5.jenkins.build894'
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-19T1624Z.master.c604172a74.jenkins.build892'
    
    * #BACK-417 Close Span when deferring to user requests (#2394)
    
    * Close Span when deferring to user requests
    
    * Address PR comments
    
    * Autoclose Levents.Span with more attributes
    
    * fix test cases
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-20T0050Z.master.722b84d446.jenkins.build897'
    
    * Force nonSSL http req to elb (#2404)
    
    * Front 790/hookup annotations api (#2400)
    
    * Finalize annotations MVP with API
    
    * Add better comments for annotations
    
    * Update string util method and GET request params
    
    * update GET method to use data instead of params
    
    * fix extra added spaces
    
    * Change GET to use params for annotations
    
    * Adjust convertHextoRGB method behavior when given incorrect arguments
    
    * Fix annotation dialog code comment
    
    * Fix isGraphInitialized function
    
    * clean up commented out code and fix naming issue
    
    * fix method for copying array in setAnnotation
    
    * fix enter key behavior in annotationDialog
    
    * Fixes for PR based on feedback from Guranjan
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-20T0154Z.master.05a6a57a98.jenkins.build900'
    
    * Add functionality to record top 10 process by res mem size
    
    * remove erroneous scalyr-agent restart in setup role
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-19T1853Z.master.b74621d9c5.jenkins.build894'
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-19T1624Z.master.c604172a74.jenkins.build892'
    
    * Update devtools/Makefile
    
    * Commit queryLanguageParser (#2406)
    
    * #front-694 - clear facet list when in case of server error. (#2383)
    
    We need to clear out the facet list if there is a server error because
    while resizing the windows we re render the facet list. So, if in case of an error
    we don't clear out the list we end up rendering older list in case of a window resize.
    
    * bump site version for QA
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-20T2219Z.master.f44b0bfd3e.jenkins.build909'
    
    * bump site version for QA
    
    * Set staging-logbackend Xmx to 10G
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-20T2241Z.master.0b54af2298.jenkins.build911'
    
    * #API-61 track sync and async latency for dashboard graph load (#2410)
    
    * track async render result and latency for dashboard graph
    
    * rm isDashboardGraph for old dash
    
    * rm isInDashboard for new dash
    
    * fix GraphBuilderTest
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-22T0548Z.master.193e41bcf7.jenkins.build915'
    
    * Updated prod-log-42 and prodeu-log-1 inventory
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-23T1535Z.master.e0235bf55f.jenkins.build917'
    
    * Remove prodeu-log-1z from inventory
    
    * Updated ecsetup and createShardConfig to prodeu-log-1y
    
    * Removed prodeu-log-36a from inventory
    
    * Added prodeu-log-1a to prodeu-log-1a group in inventory
    
    * BACK-412 Fix EpochFileManager.contains race condition and changed empty column read to return null (#2403)
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-26T1645Z.master.24f998a632.jenkins.build923'
    
    * remove staging-log-9a per failover
    
    * Annotations API followups (#2409)
    
    * zgc logging (#2397)
    
    * Add ServerState.JAVA_{VERSION,GC_NAME} statics; include in queryMasterRpcTimings
    * logging: convert Future.logIfSlow to Levents (from L)
    
    * Added prodeu-log-36z to inventory group
    
    * Changed updateUsagePlanStateForSubsidiaryAccount privs to srCustomerService (#2414)
    
    * Changes to support adding ops user to IPA instances
    
    * remove prod-log-42a from inventory
    
    * Updated stagingeu-log-9 shard inventory
    
    * Updated var logBackendInstanceType=i3.2xlarge for staging
    
    * Fix build error caused by an older version on ruby gems. (#2418)
    
    * Removed staging-log-9z from inventory
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-03T2003Z.master.653369f901.jenkins.build934'
    
    * profiling: Add stackcollapse-scalyr.pl, which does not skip the first 3 lines
    
    * #Back-390: fastpath heuristics (#2413)
    
    * Add TSStateBundle.creationTimeNs
    
    * Add "tooNewTs" heuristics to fastpath-satisfiable check
    
    * Fix mass test breakage
    
    * PR feedback
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-03T2132Z.master.03943a6098.jenkins.build938'
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-03T2132Z.master.03943a6098.jenkins.build938'
    
    * #FRONT-918 Error handling for search result linking (#2412)
    
    * Show butter if regex cannot be created (once only)
    * Prevent loop if regex always matches
    
    * Use QueryExecutive to get logVolume in backdoor (#2421)
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-03T2327Z.master.db01435751.jenkins.build941'
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-03T2327Z.master.db01435751.jenkins.build941'
    
    * Added staging-log-9z to inventory
    
    * Added staging-log-26z to staging-log-26 inventory
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-04T1901Z.master.1969f84d1c.jenkins.build946'
    
    * Gate usage of QM in getLogVolume (#2423)
    
    * BACK-32 Add a BufferedOutputStream before GZIPOutputStream in S3ArchiveManager (#2422)
    
    * Add test/com/scalyr/io/CompressSpeedTest.java
    
    * Add a BufferedOutputStream before GZIPOutputStream in S3ArchiveManager
    
    * Increase buffer sizes to 16K in S3ArchiveManager
    
    * BACK-426 Add account attribute to our audit logging (#2424)
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-04T2247Z.master.490730fc23.jenkins.build949'
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-04T2309Z.master.c18be14154.jenkins.build950'
    
    * Fix (dumb) ArrayIndexOutOfBounds exception in grpcQueryNode logging (#2425)
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-04T2309Z.master.c18be14154.jenkins.build950'
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-04T2336Z.master.343b56c5a1.jenkins.build953'
    
    * Bump scalyrSiteVersion for ['prod', 'prodeu'] to 'scalyr-war.2019-01-04T2336Z.master.343b56c5a1.jenkins.build953'
    
    * Call this.createAndRenderChart.call(this); in the loadGraphProperties to initialize graphs in an async call (#2426)
    
    After async call is finished on the dashboards we rely on this.createAndRenderChart.call(this); to initialize
    the graphs.
    
    * Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-05T0302Z.master.22a5377cc2.jenkins.build957'
    
    * #API-61 move concurrency limiter check into QueryExecutive (#2420)
    
    * what it might look like if move concurrency limiter check into QE
    
    * make globalFastpathQueryConcurrencyLimiter private
    
    * fix SubAccountTest
    
    * rename QueryExecutive#multiQuery_fastpathOnly to #query
    
    * indentation
    
    * rm deadline from #query signature
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-05T2229Z.master.382df301ed.jenkins.build959'
    
    * Bump scalyrSiteVersion for ['prod', 'prodeu'] to 'scalyr-war.2019-01-05T0302Z.master.22a5377cc2.jenkins.build957'
    
    * Decrease staging and stagingeu Java heap
    
    * Added staging-log-25z and staging-log-24z to inventory
    
    * #BACK-433: Make freezer thread epochStructureLock wait specifically configurable (#2428)
    
    * Add prod-log-73b and prod-log-42a to inventory
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-07T2230Z.master.8f454fdf78.jenkins.build964'
    
    * BACK-401 Honor data retention period for EpochFile (#2405)
    
    Modify DataTruncationThread to delete EpochFile from local FileCache and S3.
    
    * Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-07T2345Z.master.912f06b6c7.jenkins.build967'
    
    * Added staging-log-23z to inventory
    
    * Add lifetimes for ResultAspect's ColumnEventDbQuerier and EventRepositoryQuerier (in support of the anticipated complex-query engine)
    
    * Address PR feedback: LockTracker now implements AutoCloseable; clean up some code details
    
    * Remove unused import

commit b05955fd40688112f9c10e96781e022ab86d1c7e
Author: guranjan <40776762+guranjan@users.noreply.github.com>
Date:   Tue Jan 8 15:29:10 2019 -0800

    Removing call to initializeHighChartSetting() (#2430)
    
    this call was requried because of bug in HighCharts. This has since been fixed in HighCharts and
    we don't need the call. This change was made because the extra call was throwing javascript errors.

commit 8c4a44c17355cfe5be1dc7ba6316169701f520d9
Author: John Padilla <johnpadilla@users.noreply.github.com>
Date:   Tue Jan 8 15:01:13 2019 -0800

    Add srCustomerService privs for rpcProxy - needed for migrating accounts (#2371)

commit 16d3810b6b06fe6f2fb1a785ddfae3bcd82d0c08
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Tue Jan 8 22:53:12 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-08T2251Z.master.dedd2f3818.jenkins.build970'

commit dedd2f3818ec6bf58c5cf5b5506c11af4367a994
Author: James Eberle <jim@scalyr.com>
Date:   Tue Jan 8 14:27:50 2019 -0800

    BACK-418 Close orphaned threads in JUnit tests (#2411)
    
    * Update io.findify.S3Mock to 0.2.5 in pom.xml
    
    * Call mockS3.shutdown() instead of stop() in tearDownMockS3()
    
    * Call CronPool.shutdownAndAwaitTermination() instead of close() in EpochSyncManager close
    
    * Use GlobalState.inUnitTest() to decide whether to do synchronous shutdown on thread pool

commit 904a413bf6736217fa9dfb424119eb534cccb28d
Author: jchiang <jchiang@scalyr.com>
Date:   Mon Jan 7 16:15:25 2019 -0800

    Added staging-log-23z to inventory

commit 3f508614e6932c342b81d98cab59242e0f78c87c
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Mon Jan 7 23:46:57 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-07T2345Z.master.912f06b6c7.jenkins.build967'

commit 912f06b6c72757c9781fceec6988f4f06ccf4dbb
Author: Oliver Hsu <oliver@scalyr.com>
Date:   Mon Jan 7 15:25:29 2019 -0800

    BACK-401 Honor data retention period for EpochFile (#2405)
    
    Modify DataTruncationThread to delete EpochFile from local FileCache and S3.

commit 45095e54c1feeb1214d34a0bd8d8f47f9718c092
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Mon Jan 7 22:32:27 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-07T2230Z.master.8f454fdf78.jenkins.build964'

commit 42b43496e8e1af2ecd9054bdd873e0ad0e6240a5
Author: Scott Cruzen <scott@scalyr.com>
Date:   Mon Jan 7 14:23:35 2019 -0800

    Add prod-log-73b and prod-log-42a to inventory

commit 8f454fdf78bc2eac1f256b5353af3f866afd3ef2
Author: John Hart <john@scalyr.com>
Date:   Mon Jan 7 14:08:54 2019 -0800

    #BACK-433: Make freezer thread epochStructureLock wait specifically configurable (#2428)

commit 7971e6d4b1d4f44ce67c39a8ff682e513c368e51
Merge: ef93a07ede 3b961352a6
Author: jchiang <jchiang@scalyr.com>
Date:   Mon Jan 7 13:10:51 2019 -0800

    Merge branch 'master' of github.com:scalyr/scalyr

commit ef93a07ede1baf74b60525237264839903db30e9
Author: jchiang <jchiang@scalyr.com>
Date:   Mon Jan 7 13:10:38 2019 -0800

    Added staging-log-25z and staging-log-24z to inventory

commit 3b961352a633b83a2713aa9286642f3f853eeb74
Author: Scott Cruzen <scott@scalyr.com>
Date:   Sat Jan 5 22:22:38 2019 -0800

    Decrease staging and stagingeu Java heap

commit c1d441321ccb3d39e96599ff0e022cb93ac7f6a5
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Sat Jan 5 15:52:27 2019 -0800

    Bump scalyrSiteVersion for ['prod', 'prodeu'] to 'scalyr-war.2019-01-05T0302Z.master.22a5377cc2.jenkins.build957'

commit 354ede4a59561e04e85c8e040992cb98de2a836e
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Sat Jan 5 22:31:14 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-05T2229Z.master.382df301ed.jenkins.build959'

commit 382df301ede96cb5a0ac10be7c5bb5bb54ed3df0
Author: Shia <shia@scalyr.com>
Date:   Sat Jan 5 14:07:45 2019 -0800

    #API-61 move concurrency limiter check into QueryExecutive (#2420)
    
    * what it might look like if move concurrency limiter check into QE
    
    * make globalFastpathQueryConcurrencyLimiter private
    
    * fix SubAccountTest
    
    * rename QueryExecutive#multiQuery_fastpathOnly to #query
    
    * indentation
    
    * rm deadline from #query signature

commit 58219c7046c67990bc7ccd4e063345a30e0d7e03
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Fri Jan 4 19:19:56 2019 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-05T0302Z.master.22a5377cc2.jenkins.build957'

commit 22a5377cc2984f25461f32ca57f5e6abe327b2a5
Author: guranjan <40776762+guranjan@users.noreply.github.com>
Date:   Fri Jan 4 18:42:24 2019 -0800

    Call this.createAndRenderChart.call(this); in the loadGraphProperties to initialize graphs in an async call (#2426)
    
    After async call is finished on the dashboards we rely on this.createAndRenderChart.call(this); to initialize
    the graphs.

commit 610edfa3c7e18b1a4c616abe2eaa2e7cad5b05bd
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Fri Jan 4 16:24:22 2019 -0800

    Bump scalyrSiteVersion for ['prod', 'prodeu'] to 'scalyr-war.2019-01-04T2336Z.master.343b56c5a1.jenkins.build953'

commit 182f142c3dfc1634facd2b3cf3164ba1aaacffcb
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Fri Jan 4 16:03:54 2019 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-04T2336Z.master.343b56c5a1.jenkins.build953'

commit 59222b771fe2e3b0ba7a94878acbf66ab9adff62
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Fri Jan 4 15:53:09 2019 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-04T2309Z.master.c18be14154.jenkins.build950'

commit 343b56c5a16e734d43e4b6849c0ef8a75ef0de63
Author: John Hart <john@scalyr.com>
Date:   Fri Jan 4 15:11:10 2019 -0800

    Fix (dumb) ArrayIndexOutOfBounds exception in grpcQueryNode logging (#2425)

commit 77eaa0c19f01ab6cdaf01142cf295ca1143875b0
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Jan 4 23:10:35 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-04T2309Z.master.c18be14154.jenkins.build950'

commit 33e9f97d2d61ab20d3a3d36dd2d1b4ffbea80da0
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Jan 4 22:49:10 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-04T2247Z.master.490730fc23.jenkins.build949'

commit c18be14154b318022c638a61e13e9e3ffe4b0491
Author: James Eberle <jim@scalyr.com>
Date:   Fri Jan 4 14:44:48 2019 -0800

    BACK-426 Add account attribute to our audit logging (#2424)

commit 490730fc237f392c636b726a4f7a91c4270c1e43
Author: James Eberle <jim@scalyr.com>
Date:   Fri Jan 4 14:20:49 2019 -0800

    BACK-32 Add a BufferedOutputStream before GZIPOutputStream in S3ArchiveManager (#2422)
    
    * Add test/com/scalyr/io/CompressSpeedTest.java
    
    * Add a BufferedOutputStream before GZIPOutputStream in S3ArchiveManager
    
    * Increase buffer sizes to 16K in S3ArchiveManager

commit 7512093de2209d562493d0bfd3637f9b3dfe6393
Author: Chengming Hu <huchengming@users.noreply.github.com>
Date:   Fri Jan 4 12:02:38 2019 -0800

    Gate usage of QM in getLogVolume (#2423)

commit 97444b4b8c05fd179ddc54e19dfca328217289c3
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Jan 4 19:02:48 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-04T1901Z.master.1969f84d1c.jenkins.build946'

commit 1969f84d1c4ed022733ba751ade383876fdf3843
Author: jchiang <jchiang@scalyr.com>
Date:   Fri Jan 4 10:39:39 2019 -0800

    Added staging-log-26z to staging-log-26 inventory

commit 1ed38e6131686cab884d6888bc3f50901c5eca7a
Merge: 5ccd6745ce a2357d66dd
Author: jchiang <jchiang@scalyr.com>
Date:   Fri Jan 4 10:31:53 2019 -0800

    Merge branch 'master' of github.com:scalyr/scalyr

commit 5ccd6745ce90f4e0f7b63053b70d9478914f73f0
Author: jchiang <jchiang@scalyr.com>
Date:   Fri Jan 4 10:31:43 2019 -0800

    Added staging-log-9z to inventory

commit a2357d66ddda5e5995ef86e5c5e6dea6845f6ef9
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Thu Jan 3 17:22:33 2019 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-03T2327Z.master.db01435751.jenkins.build941'

commit 5a48e900fcc983966200d91e0a2ccee4610b95fc
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Thu Jan 3 23:28:35 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-03T2327Z.master.db01435751.jenkins.build941'

commit a25599ac14cbe63883600196e8987e8b57d79828
Author: Chengming Hu <huchengming@users.noreply.github.com>
Date:   Thu Jan 3 15:26:17 2019 -0800

    Use QueryExecutive to get logVolume in backdoor (#2421)

commit db01435751b7a9b874ae5e4342ff180152f37014
Author: Conrad Damon <conrad@scalyr.com>
Date:   Thu Jan 3 15:03:31 2019 -0800

    #FRONT-918 Error handling for search result linking (#2412)
    
    * Show butter if regex cannot be created (once only)
    * Prevent loop if regex always matches

commit f5e3621720f05bef1aa6e37e3d3bf612b074fd82
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Thu Jan 3 14:16:50 2019 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2019-01-03T2132Z.master.03943a6098.jenkins.build938'

commit d21a233e92ef13ce72dfb06d256b38aa1d4b1ba2
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Thu Jan 3 21:33:45 2019 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-03T2132Z.master.03943a6098.jenkins.build938'

commit 03943a6098cb653b0115c530d5514150f7b46a4b
Author: John Hart <john@scalyr.com>
Date:   Thu Jan 3 13:10:22 2019 -0800

    #Back-390: fastpath heuristics (#2413)
    
    * Add TSStateBundle.creationTimeNs
    
    * Add "tooNewTs" heuristics to fastpath-satisfiable check
    
    * Fix mass test breakage
    
    * PR feedback

commit bceee06a477f7955ac9acd3ddfc034bb0408accb
Author: John Hart <john@scalyr.com>
Date:   Thu Jan 3 12:33:11 2019 -0800

    profiling: Add stackcollapse-scalyr.pl, which does not skip the first 3 lines

commit 012143fd4395f2b9dffe40b00a9378d87c7aaf8c
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Thu Jan 3 12:04:32 2019 -0800

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2019-01-03T2003Z.master.653369f901.jenkins.build934'

commit 625e7ce4d913ada359b237465a0c7c914e6627a2
Merge: 29fb29429c 653369f901
Author: jchiang <jchiang@scalyr.com>
Date:   Thu Jan 3 11:44:41 2019 -0800

    Merge branch 'master' of github.com:scalyr/scalyr

commit 29fb29429ceeed95a04492d2f5f24b850b0a9a80
Author: jchiang <jchiang@scalyr.com>
Date:   Thu Jan 3 11:44:31 2019 -0800

    Removed staging-log-9z from inventory

commit 653369f901738914039dabdc9ea10a76a1a6202a
Author: guranjan <40776762+guranjan@users.noreply.github.com>
Date:   Thu Jan 3 11:42:10 2019 -0800

    Fix build error caused by an older version on ruby gems. (#2418)

commit 9abd35fd991af3fbbd019553cef3bafef754fb1e
Author: jchiang <jchiang@scalyr.com>
Date:   Thu Jan 3 10:49:34 2019 -0800

    Updated var logBackendInstanceType=i3.2xlarge for staging

commit e1c9fa0cbf00a7f58f5c389665bc72ea7ffa7bc9
Author: jchiang <jchiang@scalyr.com>
Date:   Thu Jan 3 10:25:09 2019 -0800

    Updated stagingeu-log-9 shard inventory

commit 0a75ec469a06d878af448516c38daecf7ff76ad8
Merge: 6b1025ed69 9322fb5b86
Author: jonathan maye-hobbs <jonmhobbs@gmail.com>
Date:   Thu Jan 3 09:45:50 2019 -0800

    Merge branch 'master' of github.com:scalyr/scalyr

commit 6b1025ed69d4743c6f7f2e977092747271349d1d
Author: jonathan maye-hobbs <jonmhobbs@gmail.com>
Date:   Thu Jan 3 09:45:45 2019 -0800

    remove prod-log-42a from inventory

commit 9322fb5b865bbddd8d32626d2b9ee44296cbb67f
Author: Scott Cruzen <scott@scalyr.com>
Date:   Wed Jan 2 13:26:56 2019 -0800

    Changes to support adding ops user to IPA instances

commit 763b95787c17d0f2f2e542a023f02130081b16ee
Author: John Padilla <johnpadilla@users.noreply.github.com>
Date:   Wed Jan 2 12:31:50 2019 -0800

    Changed updateUsagePlanStateForSubsidiaryAccount privs to srCustomerService (#2414)

commit 8a327077dec2990fcc3ebb9c9ea20c336a3998fa
Author: jchiang <jchiang@scalyr.com>
Date:   Wed Jan 2 11:14:58 2019 -0800

    Added prodeu-log-36z to inventory group

commit 6e4ef82e73896fabd4a405550b55fc8ebca135fc
Author: John Hart <john@scalyr.com>
Date:   Wed Jan 2 09:51:46 2019 -0800

    zgc logging (#2397)
    
    * Add ServerState.JAVA_{VERSION,GC_NAME} statics; include in queryMasterRpcTimings
    * logging: convert Future.logIfSlow to Levents (from L)

commit f4b16ffbd939c64ba1ab4e521a6a55a8175ac273
Author: anpatelll <asma@scalyr.com>
Date:   Fri Dec 28 14:02:23 2018 -0800

    Annotations API followups (#2409)

commit 4b1342cfec11ed7cc007710a876f55ba4b3500c1
Author: jonathan maye-hobbs <jonmhobbs@gmail.com>
Date:   Thu Dec 27 10:00:43 2018 -0800

    remove staging-log-9a per failover

commit 1996d20af00b8bfa0d73e3d70bf92452165bf9da
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Dec 26 16:46:45 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-26T1645Z.master.24f998a632.jenkins.build923'

commit 24f998a6329b5de3de81101804b3bfba748b3918
Author: Oliver Hsu <oliver@scalyr.com>
Date:   Wed Dec 26 08:23:09 2018 -0800

    BACK-412 Fix EpochFileManager.contains race condition and changed empty column read to return null (#2403)

commit f93c6612df3348159d4db8f6370181c3d97d4fd3
Author: jchiang <jchiang@scalyr.com>
Date:   Mon Dec 24 14:09:11 2018 -0800

    Added prodeu-log-1a to prodeu-log-1a group in inventory

commit 1fd51d5ee0ce59586b5a5f2d718ca9a98f478974
Author: jchiang <jchiang@scalyr.com>
Date:   Mon Dec 24 13:01:03 2018 -0800

    Removed prodeu-log-36a from inventory

commit 8ff0f856beb0056ef859d61b63666bc9fdf4b0ee
Author: jchiang <jchiang@scalyr.com>
Date:   Sun Dec 23 08:42:07 2018 -0800

    Updated ecsetup and createShardConfig to prodeu-log-1y

commit 8cc9dc2ee6a9f23b0f87e01b26e31c406cd3224a
Merge: 090dc1492a 2a12ac0c2e
Author: jchiang <jchiang@scalyr.com>
Date:   Sun Dec 23 08:17:46 2018 -0800

    Merge branch 'master' of github.com:scalyr/scalyr

commit 090dc1492a4c642d96b8c41488d12b14b5f6f687
Author: jchiang <jchiang@scalyr.com>
Date:   Sun Dec 23 08:17:34 2018 -0800

    Remove prodeu-log-1z from inventory

commit 2a12ac0c2ebcea47eef05f79feae787e5052f93f
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Sun Dec 23 15:36:59 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-23T1535Z.master.e0235bf55f.jenkins.build917'

commit e0235bf55f1f808af0091df59bbc81330785934a
Author: jchiang <jchiang@scalyr.com>
Date:   Sun Dec 23 07:13:22 2018 -0800

    Updated prod-log-42 and prodeu-log-1 inventory

commit 7120eda988983b0b3f252f206a3120036781b10d
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Sat Dec 22 05:49:57 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-22T0548Z.master.193e41bcf7.jenkins.build915'

commit 193e41bcf725acd0d00e4288480bf75c55a86eae
Author: Shia <shia@scalyr.com>
Date:   Fri Dec 21 21:21:11 2018 -0800

    #API-61 track sync and async latency for dashboard graph load (#2410)
    
    * track async render result and latency for dashboard graph
    
    * rm isDashboardGraph for old dash
    
    * rm isInDashboard for new dash
    
    * fix GraphBuilderTest

commit 6aaa88cbe0d87b6e335b8266185951407b1d7fae
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Thu Dec 20 16:12:36 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-20T2241Z.master.0b54af2298.jenkins.build911'

commit aaa13eb5cf9e8b92f3ae29e58e47bc58dd3f68de
Author: Scott Cruzen <scott@scalyr.com>
Date:   Thu Dec 20 15:21:05 2018 -0800

    Set staging-logbackend Xmx to 10G

commit 1c30c21a5da25d82cf4ed17355bd7193fe8f765e
Author: jonathan maye-hobbs <jonmhobbs@gmail.com>
Date:   Thu Dec 20 14:47:48 2018 -0800

    bump site version for QA

commit 0b54af22985264aa30cc616185ccf5f15ecc2660
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Thu Dec 20 22:20:26 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-20T2219Z.master.f44b0bfd3e.jenkins.build909'

commit b590847b2420abb5440af617278b31cc9de1cb25
Author: jonathan maye-hobbs <jonmhobbs@gmail.com>
Date:   Thu Dec 20 14:16:39 2018 -0800

    bump site version for QA

commit f44b0bfd3e7e18b8f586227a22e86a3011ffd46a
Author: guranjan <40776762+guranjan@users.noreply.github.com>
Date:   Thu Dec 20 13:57:24 2018 -0800

    #front-694 - clear facet list when in case of server error. (#2383)
    
    We need to clear out the facet list if there is a server error because
    while resizing the windows we re render the facet list. So, if in case of an error
    we don't clear out the list we end up rendering older list in case of a window resize.

commit 878cdbe5aa3d8c4557e554cd89a7d0c34bf94019
Author: anpatelll <asma@scalyr.com>
Date:   Thu Dec 20 13:50:43 2018 -0800

    Commit queryLanguageParser (#2406)

commit ea6b3f4bb5464921174b74b7bf5558c307571180
Author: Jim Eberle <jim@scalyr.com>
Date:   Thu Dec 20 11:36:14 2018 -0800

    Update devtools/Makefile

commit 2c4058fc0891460840f636b5d14c7bdf23fc95ce
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Dec 19 18:54:23 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-19T1624Z.master.c604172a74.jenkins.build892'

commit 57994f5eaa0c28e98b1e4b0d3dc276c70c6cebad
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Dec 19 18:33:44 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-19T1853Z.master.b74621d9c5.jenkins.build894'

commit d1302eb293bf031d9f2bf43589961af437f79d97
Author: Alex Elent <alex@scalyr.com>
Date:   Wed Dec 19 18:08:41 2018 -0800

    remove erroneous scalyr-agent restart in setup role

commit 765a506afc7e8aab216eec398d3fe6f66e3cc527
Author: Alex Elent <alex@scalyr.com>
Date:   Wed Dec 19 18:04:32 2018 -0800

    Add functionality to record top 10 process by res mem size

commit 55bde40455eef4dc4eac2d97bc21f97cdfa9f631
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Dec 19 17:59:25 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-20T0154Z.master.05a6a57a98.jenkins.build900'

commit 05a6a57a981fe83194701d368afdfc95ac9d557d
Author: Sean Garner <seanvgarner@gmail.com>
Date:   Wed Dec 19 17:28:15 2018 -0800

    Front 790/hookup annotations api (#2400)
    
    * Finalize annotations MVP with API
    
    * Add better comments for annotations
    
    * Update string util method and GET request params
    
    * update GET method to use data instead of params
    
    * fix extra added spaces
    
    * Change GET to use params for annotations
    
    * Adjust convertHextoRGB method behavior when given incorrect arguments
    
    * Fix annotation dialog code comment
    
    * Fix isGraphInitialized function
    
    * clean up commented out code and fix naming issue
    
    * fix method for copying array in setAnnotation
    
    * fix enter key behavior in annotationDialog
    
    * Fixes for PR based on feedback from Guranjan

commit c1c7e77ee3dfa29d68791328f97d78b5948bfe32
Author: anpatelll <asma@scalyr.com>
Date:   Wed Dec 19 17:19:28 2018 -0800

    Force nonSSL http req to elb (#2404)

commit de2175710153bcc433030f3cccca005e864b113b
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Thu Dec 20 00:51:42 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-20T0050Z.master.722b84d446.jenkins.build897'

commit 722b84d4465c6f7f718acb583c073554cff2f118
Author: Chengming Hu <huchengming@users.noreply.github.com>
Date:   Wed Dec 19 16:28:16 2018 -0800

    #BACK-417 Close Span when deferring to user requests (#2394)
    
    * Close Span when deferring to user requests
    
    * Address PR comments
    
    * Autoclose Levents.Span with more attributes
    
    * fix test cases

commit 56cb9832816eeb60653d8b6b4338ec6638a03b37
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Dec 19 11:47:51 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-19T1624Z.master.c604172a74.jenkins.build892'

commit 7a1c44fb06dfe886f8f323c02581eee6e04b3cbc
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Dec 19 11:22:32 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-19T1853Z.master.b74621d9c5.jenkins.build894'

commit b74621d9c5d5003e316e5bcdebb0a163306d0fd5
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Dec 19 18:28:55 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-19T1827Z.master.161701ddeb.jenkins.build893'

commit 161701ddebc18a18e4d91b05c5b7f8ff41c7be21
Author: Alex Elent <alex@scalyr.com>
Date:   Wed Dec 19 10:08:16 2018 -0800

    OPS-654: Roll back all staging backends to jre8/pgc

commit c604172a74e9f0edc5bfae3882f87d8dc7e6d9da
Author: steve-scalyr <steve@scalyr.com>
Date:   Wed Dec 19 08:02:47 2018 -0800

    Don't create freezer output buffer on slaves (#2402)
    
    * Don't create freezer output  buffer on slaves
    
    * Minor refactoring to address review feedback

commit 919936be2ee1aae128255477aa33acc58ca6b3b2
Author: John Hart <john@scalyr.com>
Date:   Tue Dec 18 15:42:06 2018 -0800

    Fix heisen test (#2395)
    
    * Minor: Whitelist -> AccountWhitelist conversion
    
    * Fix test: default config not being honored, wut?
    
    * fix typing

commit 8b8896972738b9ddae70ce385ab3f08372b2348f
Author: jchiang <jchiang@scalyr.com>
Date:   Tue Dec 18 14:55:09 2018 -0800

    Updated backup_to_s3.py

commit 07bf6a7ec9c234ce1bac745cd2e804d0f7c59139
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Tue Dec 18 21:30:22 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-18T2129Z.master.084299ab38.jenkins.build886'

commit f5a02b42d94a42ebd4ce978d08127be268b3938a
Author: anpatelll <asma@scalyr.com>
Date:   Tue Dec 18 13:27:50 2018 -0800

    Use another ScalyrClient.HttpProxy method to proxy to service API (#2398)

commit b1cb1a61b21e5cacd9b563fc877bbd3ac112d8e1
Author: Scott Cruzen <scott@scalyr.com>
Date:   Tue Dec 18 13:13:28 2018 -0800

    Remove runBootstrapPrechecks.py from bootstrap shell script, also add comment line so that scalyr-ops parses Overview and Description from prerequisites.yml

commit 084299ab380c8dfa7aa98fe608be12399611197a
Author: Oliver Hsu <oliver@scalyr.com>
Date:   Tue Dec 18 13:07:15 2018 -0800

    Add additional comments to AccountStatisticsGenerator (#2385)

commit 186b1a074884f6acfce38ec3124c1353dbf13c00
Author: Alex Elent <alex@scalyr.com>
Date:   Tue Dec 18 13:02:05 2018 -0800

    OPS-654: enable jre11 on prod-log-77

commit ce033562ece44bfaea5e63c8db16731bcacb5433
Author: Alex Elent <alex@scalyr.com>
Date:   Tue Dec 18 11:40:08 2018 -0800

    add default jdk11 var to evaluate to false

commit aa22a39bfded3710580e2b636f996f9075311239
Author: Scott Cruzen <scott@scalyr.com>
Date:   Tue Dec 18 10:57:52 2018 -0800

    Reduce prod frontend Java heap by 500MB to 5000MB

commit 3fe4aea22dd25bf33fc25e702a151c2a0562fec9
Author: jonathan maye-hobbs <jonmhobbs@gmail.com>
Date:   Tue Dec 18 08:26:03 2018 -0800

    ping karma to 1.4.1

commit 7939130fab72ff1d010dd0b6e8c2a40d6a8dc352
Author: Oliver Hsu <oliver@scalyr.com>
Date:   Tue Dec 18 06:19:32 2018 -0800

    Fix EopchFileManagerTest intermittent failure (#2393)

commit ef0c85391b0d956b9292df74c6b537d1ccc37e7c
Author: Scott Cruzen <scott@scalyr.com>
Date:   Mon Dec 17 16:24:44 2018 -0800

    Remove staging-log-8a

commit f8f60a4176f1a5131d6f528431fc24bd30af9993
Author: Scott Cruzen <scott@scalyr.com>
Date:   Mon Dec 17 16:20:05 2018 -0800

    Add staging-log-16b, staging-log-8a and staging-log-5a. Staging-log-8a will be removed shortly.

commit 556cb9c754c048a1a55856a746741ba82282855b
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Mon Dec 17 15:02:45 2018 -0800

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-17T2301Z.master.400e3706fa.jenkins.build876'

commit 19032b3540a34740d136119954f00597c64cfbaa
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Mon Dec 17 14:54:45 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-15T0109Z.master.4682469ed3.jenkins.build864'

commit 400e3706fa98ed59623a39438b31f6f04e715d83
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Mon Dec 17 22:38:49 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-17T2235Z.master.ee84b58c3f.jenkins.build874'

commit 6c5b2b1e5e5254cf3f51df802c028455605d9b55
Author: Conrad Damon <conrad@scalyr.com>
Date:   Mon Dec 17 14:17:40 2018 -0800

    #FRONT-805 Client-side date/time parsing (#2350)
    
    * #FRONT-805 Client-side date/time parsing
    
    Parse a variety of date/time formats that could be provided as start or end time. This is in preparation for chunking, where we will need to know the difference between the start and end time without having to make a server call. The utility function that does this is not called anywhere yet.
    
    There are 140 tests, the vast majority taken from the server tests in DateUtilTest.java. Most known logging formats are supported; a handful are not.
    
    - also turn off overly verbose debugging for slyTimeline
    - needed to add polyfills for String.padStart and String.padEnd since there's no easy way
      to use them with our current down-compiling
    - remove unused omega.elvis() function
    
    * #FRONT-805 fix test
    
    * #FRONT-805 CR changes
    
    * #FRONT-805 CR changes

commit ee84b58c3f3ce8991923524b347babee2d43a31f
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Mon Dec 17 14:13:11 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-17T1949Z.master.cc75496f9e.jenkins.build867'

commit 5c26bcb592a8e4afb86f5ad5fef3cadb67a46eff
Author: Chengming Hu <huchengming@users.noreply.github.com>
Date:   Mon Dec 17 14:12:44 2018 -0800

    Make FreezerThread run faster during restarting (#2340)
    
    * Make FreezerThread run faster during restarting
    
    * Stop using Knob to check compaction score on flush
    
    Since we probably will end up leaving the checkCompactionOnFlush knob
    to be always `true`, it seems reasonable to me to simply convert it
    to a boolean. It also helps with cleaning up the logic when closeDb.jsp
    needs to speed up the freezer thread.

commit e14a8301993b6ec662588d67003d948e6f0114e0
Author: Kyle Ong <ongman@berkeley.edu>
Date:   Mon Dec 17 13:48:07 2018 -0800

    #API-64 use scalyr-client only in ScalyrSite (#2387)
    
    * use scalyr-client 6.0.4 only in ScalyrSite

commit 53ad5686364fd35337aa6f38b233cd05af987654
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Mon Dec 17 21:20:51 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-17T2117Z.master.b3c12a45a9.jenkins.build871'

commit b3c12a45a9f4607dbc083e15992f47686a79c0e0
Author: Chengming Hu <huchengming@users.noreply.github.com>
Date:   Mon Dec 17 12:57:51 2018 -0800

    Do not L.error logging for query3 (#2391)

commit 709ed425f851dcd57c0c4be173c3d5e55be7851d
Author: Shia <shia@scalyr.com>
Date:   Mon Dec 17 12:56:26 2018 -0800

    #API-58 SendGrid templates (#2363)
    
    * call SG API instead of all but linkAccountInvite JSP templates
    
    * use SG in linkAccountInvite, and rm unused vars
    
    * do not mess w/ unused vars in linkAccountInviteEmail for now
    
    * cosmetics
    
    * rm invitationEmail.jsp
    
    * rm unused var
    
    * durable task to call SG API, and supports retry
    
    * composite instead of global state
    
    * use TestServer
    
    * oops dangling exceptions and final

commit 56c6ee2699396b87a10dd8fbe0a575540e8e4e5d
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Mon Dec 17 20:25:02 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-17T2022Z.master.c266aa0edb.jenkins.build868'

commit c266aa0edb59502a4edff9dd68288df5e189c1b1
Author: Chengming Hu <huchengming@users.noreply.github.com>
Date:   Mon Dec 17 12:00:52 2018 -0800

    #BACK-415 Include possible layers when disabling accounts (#2389)

commit cc75496f9e93ca86980f89ee8070a78705b3e52d
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Mon Dec 17 11:28:34 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-15T0109Z.master.4682469ed3.jenkins.build864'

commit 3e0d7f0b040a8842850f4730bef96bb72d53070d
Author: steve-scalyr <steve@scalyr.com>
Date:   Mon Dec 17 06:38:51 2018 -0800

    Fixes for flushing of stale MultiLineCombiners (#2386)
    
    * Fixes for flushing of stale multi-line combiners
    
    * Fix nonce generation to not discard messages with identical timestamps if the messages are different
    
    * Minor updates to address PR feedback
    
    * Typo fix

commit a8d4611ce9a4a823d80d3e19b225f4e2864235bf
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Fri Dec 14 17:11:45 2018 -0800

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-15T0109Z.master.4682469ed3.jenkins.build864'

commit 4682469ed3cf5d29db94e824afdb364ec448a324
Author: Kyle Ong <ongman@berkeley.edu>
Date:   Fri Dec 14 16:50:35 2018 -0800

    #API-26 grace period alert logs (#2373)
    
    * adjust bounds when searching for logs to include in email alerts
    
    * split LogMessageCache into separate class

commit b26713d78bd656c52e542f2b9facbf822dda9481
Author: anpatelll <asma@scalyr.com>
Date:   Fri Dec 14 16:34:08 2018 -0800

    Code style settings intelliJ (#2381)

commit bab07773b4f314f0b5cf8f94a044e28bbfbb6ca4
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Dec 14 23:39:40 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T2331Z.master.ef3591edcf.jenkins.build860'

commit 5b7edb910313bb02061158633e1304f368738fc7
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Dec 14 23:33:46 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T2330Z.master.9a55a8b1ca.jenkins.build859'

commit ef3591edcffb90f4ca3141c1ae8b16662d1a9277
Author: Alex Elent <44176260+aelent-scalyr@users.noreply.github.com>
Date:   Fri Dec 14 15:11:28 2018 -0800

    OPS-654: Add jre11 support (#2384)
    
    * OPS-654: Add support for jre11

commit 9a55a8b1ca95bacfe8dbce1ad90ec4f782c43435
Author: guranjan <40776762+guranjan@users.noreply.github.com>
Date:   Fri Dec 14 15:10:09 2018 -0800

    #front-677 - convert stale form jsp page to angular (#2359)
    
    convert stale form jsp page to angular
    remove .jsp file that's converted to angular

commit cc26d112e419ae8aeb76806aa979546a2b5a0b63
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Fri Dec 14 14:27:44 2018 -0800

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T2226Z.master.f3f44fd043.jenkins.build856'

commit e27320e4b3e6e15e61f6d59e66b7f9324bdab699
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Fri Dec 14 14:24:53 2018 -0800

    Bump scalyrSiteVersion for ['prod', 'prodeu'] to 'scalyr-war.2018-12-14T2101Z.master.ecc4a64757.jenkins.build853'

commit f3f44fd0434648276a180dca21abb34e8ce334bc
Author: Chengming Hu <huchengming@users.noreply.github.com>
Date:   Fri Dec 14 14:05:37 2018 -0800

    #BACK-410 Fix the inconsistent readview instead of using a workaround (#2362)
    
    * Fix the inconsistent readview instead of using a workaround
    
    We used a workaround that avoid building coarser histograms within a single
    loop, this works most of the time, but sometimes we ran into a stackoverflow
    exception due to the resursion being too deep. This commit revokes the previous
    workaround, and actually fixes the inconsistent readview issue, so that it's
    now safe to build coarser histograms out of fine ones, in the same loop.
    
    * Address PR review
    
    * Refactor HistogramBuilderThread.buildHistograms
    
    * Fix out-of-dated javadoc

commit b3ffdd762a2325316fd7a0823c78701092c0f194
Author: Alex Elent <alex@scalyr.com>
Date:   Fri Dec 14 13:39:00 2018 -0800

    Add timeout to backdoor ansible library

commit af06a43da2d480a61c03223ed147c3a9b3021304
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Fri Dec 14 13:15:58 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-14T2101Z.master.ecc4a64757.jenkins.build853'

commit ecc4a64757e7f710e7c5669aeb1d26ed5363b268
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Dec 14 20:39:13 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T2036Z.master.a47a07e2ee.jenkins.build852'

commit a47a07e2ee92cb09230b24ed59ea42dc5afabf15
Author: jeffscalyr <39502328+jeffscalyr@users.noreply.github.com>
Date:   Fri Dec 14 12:12:36 2018 -0800

    #FRONT-880 Handle client side timeout
    
    * #FRONT-880 Handle client side timeout
    
    * #FRONT-880 New line at eof
    
    * #FRONT-880 Code review feedback

commit e850e87aca815315720073c4283475e19501cd24
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Dec 14 19:53:35 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T1950Z.master.6d69879006.jenkins.build850'

commit 6d698790068e41be9de3f04f05a3ac7881dbdb45
Author: kit-scalyr <42550263+kit-scalyr@users.noreply.github.com>
Date:   Fri Dec 14 11:30:37 2018 -0800

    #FRONT-846 fix endtime when sending graph (#2382)

commit aa86dba023f314c99d6d9d4846810398bae61dd2
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Dec 14 17:43:16 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T1740Z.master.316d8c31d1.jenkins.build848'

commit 316d8c31d157b9090b3e1e7c0da6ec41a608ceaa
Author: Oliver Hsu <oliver@scalyr.com>
Date:   Fri Dec 14 09:09:43 2018 -0800

    BACK-412 Add PreintersectionEpoch exception tests (#2379)

commit 76f55832ffa60b1355945cc838b577f93f4d6c78
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Thu Dec 13 18:54:07 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-14T0246Z.master.ac1a6b3f11.jenkins.build843'

commit 504df7aed4b47cbae900d1cbc6a4f8bb108eaa2d
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Dec 14 02:49:25 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T0246Z.master.ac1a6b3f11.jenkins.build843'

commit 68c4c7dd66520f2dda49d8641f865a7165cdc841
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Dec 14 02:40:58 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T0238Z.master.af07d41b64.jenkins.build842'

commit cdeafabc54ff92d856bc0cdf0a6f4072583664fe
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Dec 14 02:21:56 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T0218Z.master.f6370ce822.jenkins.build841'

commit ac1a6b3f114cf0bd8be198229a389962e552d2f8
Author: Oliver Hsu <oliver@scalyr.com>
Date:   Thu Dec 13 18:20:14 2018 -0800

    BACK-412 Write EpochHeader first (#2375)
    
    Added `writeEpochHeaderLast` knob with default false to write epoch header first.
    Modified `PreintersectionTest` to trigger "Assertion failed: Empty columns not supported" error if preintersection epoch is not persisted correctly.

commit af07d41b64f1265afdf8e6497ba8130332239d27
Author: jeffscalyr <39502328+jeffscalyr@users.noreply.github.com>
Date:   Thu Dec 13 18:11:49 2018 -0800

    #FRONT-899 Remove extra $ from cluster field names (#2377)
    
    * #FRONT-899 Remove extra $ from cluster field names
    
    * #FRONT-899 and #FRONT-907 unit tests

commit f6370ce822b90ead40350476afc0077592074e6c
Author: kit-scalyr <42550263+kit-scalyr@users.noreply.github.com>
Date:   Thu Dec 13 17:35:48 2018 -0800

    #FRONT-846 Replace arrow and dot characters (#2378)

commit c171b7017cffcb495b9213470fa1ea7a1332ede1
Author: Scott Cruzen <scott@scalyr.com>
Date:   Thu Dec 13 17:24:16 2018 -0800

    Add missing tasks:

commit fcfd985a102a044fa71dac38810c8bad7e8f0bbf
Author: Scott Cruzen <scott@scalyr.com>
Date:   Thu Dec 13 17:14:28 2018 -0800

    Same fix for cleanish_failover_2

commit 90e46b2e69cf0b1f345e248dffae554312a83850
Author: Scott Cruzen <scott@scalyr.com>
Date:   Thu Dec 13 17:01:20 2018 -0800

    Minor cleanish failover fix

commit 559fb8e337ce41bfbfc9e452633252c2a32346d6
Author: Scott Cruzen <scott@scalyr.com>
Date:   Thu Dec 13 16:56:22 2018 -0800

    Cleanish failover for staging shard 3

commit 58d7fdc90ad74fa6928dc116d2f089a4563e1723
Author: Alex Elent <alex@scalyr.com>
Date:   Thu Dec 13 17:07:51 2018 -0800

    cleanish_failover: only delete scalyr-config git dir when SCALYR_CONFIG_DIR set to auto

commit b35b77b48c95befab9b0d6fb7b9c999bab31b11c
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Dec 14 01:03:16 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T0059Z.master.78098e209b.jenkins.build836'

commit 78098e209b9276a32d5cc78b675c127a19959621
Author: Chengming Hu <huchengming@users.noreply.github.com>
Date:   Thu Dec 13 16:37:40 2018 -0800

    #BACK-413 Avoid using epochHeader in directdb for histogram (#2376)
    
    * Avoid using epochHeader in directdb for histogram
    
    * Address PR review
    
    * Fix typo
    
    * Fix test cases

commit 44356cf045a9dfb31ad3fd64e56085de7442c152
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Fri Dec 14 00:20:29 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-14T0017Z.master.7625e83dae.jenkins.build834'

commit 7625e83dae49fc7a9f2d2604efca873d2e632244
Author: kit-scalyr <42550263+kit-scalyr@users.noreply.github.com>
Date:   Thu Dec 13 15:36:04 2018 -0800

    #FRONT-846 Add more features to post to Slack. (#2334)
    
    * #FRONT-846 add more features to post to slack
    
    * #FRONT-846 add a js test and comments
    
    * #FRONT-846 Use methods from Responese return errors
    
    * #FRONT-846 add a more accurate endTimeMilliseconds
    
    * #FRONT-846 Add front-end test for SlackApiService.js and replace java slack enum values
    
    * Fix slackApiServiceTest.js and PreferencesTest.java
    
    * #FRONT-846 Add a test for getUserSlackChannels with a null userName
    
    * #FRONT-846 Address a failed build and fix typos

commit 0425986f5bcb2ed819fb7cb33798d579d7334b4d
Author: Alex Elent <alex@scalyr.com>
Date:   Thu Dec 13 15:04:52 2018 -0800

    Add prod-log-1x to inventory

commit 80f5bd548500e386dc64810181fb09b4f630c7c8
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Thu Dec 13 20:38:23 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-13T2034Z.master.8fb4eff549.jenkins.build831'

commit 8fb4eff549c5a4485e97b848749d7b95eee56df3
Author: Alex Elent <alex@scalyr.com>
Date:   Thu Dec 13 12:14:37 2018 -0800

    OPS-1108: Add staging-log-15y

commit baab4b7417333a85e8ffbf27309d3da0149bebf9
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Thu Dec 13 11:05:21 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-13T1855Z.master.bf6088883e.jenkins.build828'

commit 7f04d36863ffc7eaccd2ed981aba0bce568220a8
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Thu Dec 13 18:58:34 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-13T1855Z.master.bf6088883e.jenkins.build828'

commit bf6088883ef77bac6d96d5e91e9bd831ad14ac08
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Thu Dec 13 18:32:35 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-13T1823Z.master.9e2fb61443.jenkins.build825'

commit d2b6721580020371a7c7d0f24e0812f96cbc805a
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Thu Dec 13 18:25:16 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-13T1822Z.master.8c8c0253f7.jenkins.build826'

commit 8c8c0253f78ef159cd9eaa5861511d6660c71c09
Author: jeffscalyr <39502328+jeffscalyr@users.noreply.github.com>
Date:   Thu Dec 13 10:00:56 2018 -0800

    #FRONT-898 Convert search result linking to lab (#2367)

commit 9e2fb614434bf4392859926cefb1284b5d1392bd
Author: jeffscalyr <39502328+jeffscalyr@users.noreply.github.com>
Date:   Thu Dec 13 10:00:05 2018 -0800

    #FRONT-900 Add search links and post to slack to labs page

commit 8dbeb6188d99fd613d9f88b0b3759cc7c874844b
Author: anpatelll <asma@scalyr.com>
Date:   Wed Dec 12 18:03:44 2018 -0800

    Proxy to api service (#2368)

commit ef8a4d6c7006381208451e0f0ac178bb5191fcac
Author: steve-scalyr <steve@scalyr.com>
Date:   Wed Dec 12 17:09:46 2018 -0800

    Line combiner fixes (#2372)
    
    * When queue servers are responsible for parsing, they should flush stale multie-line combiners, just as we do when parsing in the backends
    
    * Discard stale / unused MultiLineCombiners; log the number ouf outstanding combiners
    
    * Address PR feedback; add logging to help diagnose flushMultiLineCombiners failure

commit 4d93c5f8d2daafe671ab23e25f04a1a140764eb5
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Dec 12 12:21:32 2018 -0800

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-12T2020Z.master.af9ef33206.jenkins.build821'

commit af9ef33206faefd6c143eef94104ce6d2f355c0c
Author: guranjan <40776762+guranjan@users.noreply.github.com>
Date:   Wed Dec 12 11:58:06 2018 -0800

    #front-906 - adding a null for getAllSeries() (#2369)
    
    It turns out some graphs can have no series and the javascript for/in throws an error
    when iterator is null.

commit b844cb34b10f936ea1a8493389f5398f2ef3d2eb
Author: guranjan <40776762+guranjan@users.noreply.github.com>
Date:   Wed Dec 12 11:43:11 2018 -0800

    Fix broken zoom for sly new graph. For some reason using ng-if causes breaking (#2366)
    
    Fix broken zoom for sly new graph. For some reason using ng-if causes breaking of binding and the watcher doesn't run. Changing it to ng-show fixes this.

commit 46a59d91ad29f71222618697d8aa6e66af0e097a
Author: jenkins <jenkins@ip-172-23-91-222.ec2.internal>
Date:   Wed Dec 12 08:41:54 2018 -0800

    Bump scalyrSiteVersion for ['staging', 'stagingeu'] to 'scalyr-war.2018-12-12T0447Z.master.16329c5ea6.jenkins.build817'

commit 1f9aaae22cd89b4d38b011086f71775f69bad413
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Dec 12 04:49:57 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-12T0447Z.master.16329c5ea6.jenkins.build817'

commit 16329c5ea615bacdef0b0961720a55a140de36f6
Author: Oliver Hsu <oliver@scalyr.com>
Date:   Tue Dec 11 20:27:16 2018 -0800

    BACK-408 Fix slow EpochFile freeze times (#2365)
    
    Override `write(byte[])` methods in EpochFileOutputStream to call underlying  output stream `write(byte[])` method.  Default `OutputStream` implementation for `write(byte[])` writes a byte at a time.

commit 12fcb639908d807fcdf38c503ddf3b13755b6243
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Wed Dec 12 00:51:57 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-12T0048Z.master.3cea5a2085.jenkins.build815'

commit 3cea5a2085f5ba23561fd3557f6199d54e3e5e6a
Author: jeffscalyr <39502328+jeffscalyr@users.noreply.github.com>
Date:   Tue Dec 11 16:20:37 2018 -0800

    #FRONT-892 Create labsService (#2344)
    
    * #FRONT-892 Create labsService
    
    * #FRONT-892 Add tests for the labs service
    
    * #FRONT-892 Test feedback

commit 3006c34b0e450d65dc6128c79391482d38dde262
Author: opsjenkins <opsjenkins@scalyr.com>
Date:   Tue Dec 11 22:18:39 2018 +0000

    Bump scalyrSiteVersion for ['qatesting'] to 'scalyr-war.2018-12-11T2215Z.master.6619610996.jenkins.build813'

commit 661961099643c158db3d060e8c1b34d8a26e29f2
Author: Alex Elent <44176260+aelent-scalyr@users.noreply.github.com>
Date:   Tue Dec 11 13:55:48 2018 -0800

    OPS-1112: Update syslog to include kernel messages and add those to scalyr-agent (#2364)
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ git remote add upstream https://github.com/scalyr/scalyr
fatal: remote upstream already exists.
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ cd ..
Sowmyas-MBP:scalyr sowmyaramani$ ls
InternalTools			Profiling			ScalyrSite			annotations			docker				spotbugs-security-include.xml
Jenkinsfile			README.md			ScalyrSite2			checkstyle-suppressions.xml	pom.xml
Jenkinsfile-shellcheck		ScalyrAgent			ScalyrTest			config				scripts
Sowmyas-MBP:scalyr sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub/scalyr
Sowmyas-MBP:scalyr sowmyaramani$ git fetch upstream
remote: Enumerating objects: 5009, done.
remote: Counting objects: 100% (5009/5009), done.
remote: Compressing objects: 100% (82/82), done.
remote: Total 10455 (delta 4929), reused 4956 (delta 4915), pack-reused 5446
Receiving objects: 100% (10455/10455), 6.18 MiB | 11.89 MiB/s, done.
Resolving deltas: 100% (7795/7795), completed with 1130 local objects.
From https://github.com/scalyr/scalyr
 * [new branch]            assetBundle                          -> upstream/assetBundle
 * [new branch]            francisco                            -> upstream/francisco
 * [new branch]            francisco_bak                        -> upstream/francisco_bak
 * [new branch]            hotfix/build1168                     -> upstream/hotfix/build1168
 * [new branch]            hotfix/build1211                     -> upstream/hotfix/build1211
 * [new branch]            hotfix/build1338                     -> upstream/hotfix/build1338
 * [new branch]            hotfix/build1408                     -> upstream/hotfix/build1408
 * [new branch]            hotfix/build1432                     -> upstream/hotfix/build1432
 * [new branch]            hotfix/build1472                     -> upstream/hotfix/build1472
 * [new branch]            hotfix/build1489                     -> upstream/hotfix/build1489
 * [new branch]            hotfix/build1515                     -> upstream/hotfix/build1515
 * [new branch]            hotfix/build1539                     -> upstream/hotfix/build1539
 * [new branch]            hotfix/build1574                     -> upstream/hotfix/build1574
 * [new branch]            hotfix/build1666                     -> upstream/hotfix/build1666
 * [new branch]            hotfix/build1720                     -> upstream/hotfix/build1720
 * [new branch]            hotfix/build1755                     -> upstream/hotfix/build1755
 * [new branch]            hotfix/build2                        -> upstream/hotfix/build2
 * [new branch]            jmorascalyr-k8s-docs-iteration2      -> upstream/jmorascalyr-k8s-docs-iteration2
   67cebd1f70..ea4a8abd0f  master                               -> upstream/master
 * [new branch]            pom-update                           -> upstream/pom-update
 * [new branch]            revert-2749-bug/typo                 -> upstream/revert-2749-bug/typo
 * [new branch]            revert-2833-bug/front-1129           -> upstream/revert-2833-bug/front-1129
 * [new branch]            revert-2902-API-109_logs_in_opsgenie -> upstream/revert-2902-API-109_logs_in_opsgenie
Sowmyas-MBP:scalyr sowmyaramani$ git checkout master
Already on 'master'
Your branch is up to date with 'origin/master'.
Sowmyas-MBP:scalyr sowmyaramani$ git merge upstream/master
Updating 2ac0722229..ea4a8abd0f
Fast-forward
 .gitignore                                                                                                                     |    1 +
 InternalTools/src/main/java/com/scalyr/internaltools/AccountStatisticsGenerator.java                                           |   22 +-
 InternalTools/src/main/java/com/scalyr/internaltools/DirectDB.java                                                             |  363 +++-
 InternalTools/src/main/java/com/scalyr/internaltools/EventDbTools.java                                                         |   12 +-
 InternalTools/src/main/java/com/scalyr/internaltools/HostStates.java                                                           |    5 +-
 InternalTools/src/main/java/com/scalyr/internaltools/HtmlBuilder.java                                                          |    9 +-
 InternalTools/src/main/java/com/scalyr/internaltools/InternalRpcs.java                                                         |  113 +-
 InternalTools/src/main/java/com/scalyr/internaltools/Miscellaneous.java                                                        |   25 +-
 InternalTools/src/main/java/com/scalyr/internaltools/ReplicationManagement.java                                                |    6 +-
 InternalTools/src/main/java/com/scalyr/internaltools/TimeseriesTools.java                                                      |    2 +-
 InternalTools/src/main/java/com/scalyr/internaltools/Users.java                                                                |  368 +++-
 InternalTools/src/test/java/com/scalyr/internaltools/AccountStatisticsGeneratorTest.java                                       |   37 +-
 Jenkinsfile                                                                                                                    |   21 +-
 Jenkinsfile-deploy-docs                                                                                                        |   75 +
 Profiling/jhscripts/compare-timeperiods                                                                                        |    4 +-
 Profiling/jhscripts/compare-variants                                                                                           |    2 +-
 Profiling/reformat_facetquery.pl                                                                                               |   38 +-
 README.md                                                                                                                      |   10 +-
 ScalyrAgent/monitor_docs/docker_monitor.md                                                                                     |   22 +-
 ScalyrAgent/monitor_docs/kubernetes_events_monitor.md                                                                          |  187 ++
 ScalyrAgent/monitor_docs/redis_monitor.md                                                                                      |    1 +
 ScalyrAgent/monitor_docs/url_monitor.md                                                                                        |    6 +-
 ScalyrAgent/monitor_docs/windows_event_log_monitor.md                                                                          |   24 +-
 ScalyrSite/WebContent/WEB-INF/dashboards/k8s Events.js                                                                         |  112 ++
 ScalyrSite/WebContent/WEB-INF/dashboards/k8s Metrics.js                                                                        |   22 +-
 ScalyrSite/WebContent/WEB-INF/dashboards/log Volume.js                                                                         |   92 +-
 ScalyrSite/WebContent/WEB-INF/parsers/k8sEvents.js                                                                             |   25 +
 ScalyrSite/WebContent/WEB-INF/parsers/postgresLog.js                                                                           |   12 +-
 ScalyrSite/WebContent/WEB-INF/web.xml                                                                                          |   15 +-
 ScalyrSite/WebContent/common/pages/404.jsp                                                                                     |   36 -
 ScalyrSite/WebContent/common/pages/loginForm.jsp                                                                               |    4 +-
 ScalyrSite/WebContent/common/pages/ssoLogin.jsp                                                                                |    5 +-
 ScalyrSite/WebContent/common/pages/template.jsp                                                                                |    8 +-
 ScalyrSite/WebContent/common/pages/verifyEmail.jsp                                                                             |   68 -
 ScalyrSite/WebContent/docs/helpAlerts.md                                                                                       |   35 +-
 ScalyrSite/WebContent/docs/helpApi.md                                                                                          |  159 +-
 ScalyrSite/WebContent/docs/helpConfig.md                                                                                       |    2 +
 ScalyrSite/WebContent/docs/helpDashboards.md                                                                                   |   28 +-
 ScalyrSite/WebContent/docs/helpDistributionOverview.md                                                                         |   10 +-
 ScalyrSite/WebContent/docs/helpGettingStarted.md                                                                               |   39 +-
 ScalyrSite/WebContent/docs/helpGraphOverview.md                                                                                |    6 +-
 ScalyrSite/WebContent/docs/helpGraphReference.md                                                                               |    4 +-
 ScalyrSite/WebContent/docs/helpHowScalyrWorks.md                                                                               |    2 +-
 ScalyrSite/WebContent/docs/helpInstallDockerAgent2.md                                                                          |  174 +-
 ScalyrSite/WebContent/docs/helpInstallKubernetesAgent.md                                                                       |  570 ++++--
 ScalyrSite/WebContent/docs/helpLogOverview.md                                                                                  |  147 +-
 ScalyrSite/WebContent/docs/helpLogReference.md                                                                                 |  247 ---
 ScalyrSite/WebContent/docs/helpParsingLogs.md                                                                                  |   30 +-
 ScalyrSite/WebContent/docs/helpPowerQueries.md                                                                                 |  605 ++++++
 ScalyrSite/WebContent/docs/helpQueryLanguage.md                                                                                |   60 +-
 ScalyrSite/WebContent/docs/helpQueryReference.md                                                                               |   44 +-
 ScalyrSite/WebContent/docs/helpSolutions.md                                                                                    |    3 -
 ScalyrSite/WebContent/docs/helpView.md                                                                                         |    3 +
 ScalyrSite/WebContent/docs/solutions/genericLogsFromS3.md                                                                      |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnAlertLogMessage.md                                                                     |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnAlertServerCount.md                                                                    |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnAlertServerDown.md                                                                     |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnAlertSiteUnavailable.md                                                                |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnAlertSystemMetric.md                                                                   |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnCloudFront.md                                                                          |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnCloudTrail.md                                                                          |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnELBAccessLogs.md                                                                       |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnHipChat.md                                                                             |  129 --
 ScalyrSite/WebContent/docs/solutions/slnImportRdsLogs.md                                                                       |   84 +-
 ScalyrSite/WebContent/docs/solutions/slnRedshiftLogs.md                                                                        |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnS3BucketAccessLogs.md                                                                  |    2 +-
 ScalyrSite/WebContent/docs/solutions/slnSpotInstanceData.md                                                                    |    2 +-
 ScalyrSite/WebContent/eventPages/logParseTester.jsp                                                                            |    2 +-
 ScalyrSite/WebContent/images/doc/logtext.png                                                                                   |  Bin 102518 -> 410697 bytes
 ScalyrSite/WebContent/images/doc/nuiEventDetails.png                                                                           |  Bin 84290 -> 103137 bytes
 ScalyrSite/WebContent/images/doc/nuiGraphableFieldValues.png                                                                   |  Bin 69163 -> 57929 bytes
 ScalyrSite/WebContent/images/doc/nuiLogOverview.png                                                                            |  Bin 1171151 -> 447721 bytes
 ScalyrSite/WebContent/images/doc/nuiLogViewSettings.png                                                                        |  Bin 162639 -> 143530 bytes
 ScalyrSite/WebContent/images/error-404.svg                                                                                     | 2439 +++++++++++++++++++++++
 ScalyrSite/WebContent/images/error-503.svg                                                                                     |  702 +++++++
 ScalyrSite/WebContent/images/error-50x.svg                                                                                     |  436 +++++
 ScalyrSite/WebContent/internal/computedGraph.jsp                                                                               |  266 ---
 ScalyrSite/WebContent/internal/configTestDash.jsp                                                                              |   66 -
 ScalyrSite/WebContent/internal/internalApiMon.jsp                                                                              |   87 -
 ScalyrSite/WebContent/internal/iobench.jsp.hide                                                                                | 1879 ------------------
 ScalyrSite/WebContent/internal/status.jsp                                                                                      |   26 +
 ScalyrSite/WebContent/internal/zkMonitoring.jsp                                                                                |   73 -
 ScalyrSite/WebContent/internal/zkServerMonitoring.jsp                                                                          |   70 -
 ScalyrSite/WebContent/introspection/serverStatus.jsp                                                                           |   24 +-
 ScalyrSite/WebContent/js/views/errors.css                                                                                      |   23 +-
 ScalyrSite/WebContent/js/views/errors.html                                                                                     |    7 +-
 ScalyrSite/WebContent/mainPages/markdown.jsp                                                                                   |    8 +-
 ScalyrSite/WebContent/sitemap_main.xml                                                                                         |    4 -
 ScalyrSite/devtools/Makefile                                                                                                   |    2 +-
 ScalyrSite/devtools/failfast.txt                                                                                               |    1 -
 ScalyrSite/devtools/fast-compile-functions.bash                                                                                |   17 +-
 ScalyrSite/pom.xml                                                                                                             |  182 +-
 ScalyrSite/src/com/scalyr/actors/ActorSession.java                                                                             |  101 +-
 ScalyrSite/src/com/scalyr/client/AWSUtil.java                                                                                  |  250 +--
 ScalyrSite/src/com/scalyr/client/HttpClient.java                                                                               |    2 +-
 ScalyrSite/src/com/scalyr/client/HttpProxy.java                                                                                |  168 +-
 ScalyrSite/src/com/scalyr/client/HttpRequestParameters.java                                                                    |   37 +-
 ScalyrSite/src/com/scalyr/client/ScalyrHttpServletResponse.java                                                                |   33 +
 ScalyrSite/src/com/scalyr/collections/AbstractIntToIntHashMap.java                                                             |  127 ++
 ScalyrSite/src/com/scalyr/collections/ByteArrayToIntMap.java                                                                   |  120 ++
 ScalyrSite/src/com/scalyr/collections/GarbageCollectableArena.java                                                             |   67 +
 ScalyrSite/src/com/scalyr/collections/README.md                                                                                |    8 +
 ScalyrSite/src/com/scalyr/config/ApiToken.java                                                                                 |    6 +-
 ScalyrSite/src/com/scalyr/config/ConfigLogic.java                                                                              |   28 +-
 ScalyrSite/src/com/scalyr/config/DetailedPermissions.java                                                                      |    2 +-
 ScalyrSite/src/com/scalyr/config/MockEncryptionKeyManager.java                                                                 |   17 +
 ScalyrSite/src/com/scalyr/config/OpenCensus.java                                                                               |  148 ++
 ScalyrSite/src/com/scalyr/config/PasswordManager.java                                                                          |    5 +-
 ScalyrSite/src/com/scalyr/config/RestrictedAction.java                                                                         |   25 -
 ScalyrSite/src/com/scalyr/config/ZkEncryptionKeyManager.java                                                                   |   51 +-
 ScalyrSite/src/com/scalyr/config/api/ApiHandler.java                                                                           |   51 +-
 ScalyrSite/src/com/scalyr/config/api/ApiTokens.java                                                                            |    5 +-
 ScalyrSite/src/com/scalyr/config/api/GenericApiServlet.java                                                                    |  145 +-
 ScalyrSite/src/com/scalyr/config/api/GetTeamTokenApiHandler.java                                                               |   57 +
 ScalyrSite/src/com/scalyr/config/api/InviteUserApiHandler.java                                                                 |    5 +-
 ScalyrSite/src/com/scalyr/config/api/scim/ScimApiServlet.java                                                                  |  147 ++
 ScalyrSite/src/com/scalyr/config/api/scim/ScimConverters.java                                                                  |  140 ++
 ScalyrSite/src/com/scalyr/config/api/scim/ScimGetOrUpdateUserByEmailApiHandler.java                                            |   96 +
 ScalyrSite/src/com/scalyr/config/api/scim/ScimListOrCreateUserApiHandler.java                                                  |   78 +
 ScalyrSite/src/com/scalyr/config/api/scim/ScimUserAccountLinker.java                                                           |   82 +
 ScalyrSite/src/com/scalyr/config/api/scim/ScimUserManagement.java                                                              |  253 +++
 ScalyrSite/src/com/scalyr/config/backend/ConfigRepository.java                                                                 |   26 +-
 ScalyrSite/src/com/scalyr/config/backend/RemoteS3ArchiveManager.java                                                           |    7 +-
 ScalyrSite/src/com/scalyr/config/backend/ReplicaLookup.java                                                                    |    4 +-
 ScalyrSite/src/com/scalyr/config/backend/ShardBackendNode.java                                                                 |    6 +-
 ScalyrSite/src/com/scalyr/config/backend/ShardBackendNodeImpl.java                                                             |  111 +-
 ScalyrSite/src/com/scalyr/config/backend/TokenDecoderCache.java                                                                |    2 +-
 ScalyrSite/src/com/scalyr/config/backend/UserShardManager.java                                                                 | 1067 +++++++----
 ScalyrSite/src/com/scalyr/config/backend/ZKWrapper.java                                                                        |   27 +-
 ScalyrSite/src/com/scalyr/core/AccountWhitelist.java                                                                           |   31 +-
 ScalyrSite/src/com/scalyr/core/BatchedOp.java                                                                                  |  109 +-
 ScalyrSite/src/com/scalyr/core/BoundedCache.java                                                                               |   13 +-
 ScalyrSite/src/com/scalyr/core/ByteScanner.java                                                                                |   10 +-
 ScalyrSite/src/com/scalyr/core/ByteSerializer.java                                                                             |    6 +
 ScalyrSite/src/com/scalyr/core/ByteUtils.java                                                                                  |   89 +-
 ScalyrSite/src/com/scalyr/core/ByteVector.java                                                                                 |   49 -
 ScalyrSite/src/com/scalyr/core/CollectionUtil.java                                                                             |    4 +
 ScalyrSite/src/com/scalyr/core/ConfigurableThreadpool.java                                                                     |   11 +-
 ScalyrSite/src/com/scalyr/core/DataReader.java                                                                                 |    2 +-
 ScalyrSite/src/com/scalyr/core/DateUtil.java                                                                                   |   82 +-
 ScalyrSite/src/com/scalyr/core/F2.java                                                                                         |   32 -
 ScalyrSite/src/com/scalyr/core/FileCache.java                                                                                  |  312 ++-
 ScalyrSite/src/com/scalyr/core/HeavyHittersHashtable.java                                                                      |   10 +-
 ScalyrSite/src/com/scalyr/core/IOUtil.java                                                                                     |   27 +
 ScalyrSite/src/com/scalyr/core/KeyedKnobDouble.java                                                                            |   66 +
 ScalyrSite/src/com/scalyr/core/KeyedKnobString.java                                                                            |    5 +
 ScalyrSite/src/com/scalyr/core/LongRange.java                                                                                  |   24 +-
 ScalyrSite/src/com/scalyr/core/LongRanges.java                                                                                 |  164 ++
 ScalyrSite/src/com/scalyr/core/MultiMap.java                                                                                   |    4 +
 ScalyrSite/src/com/scalyr/core/MurmurHash.java                                                                                 |  122 +-
 ScalyrSite/src/com/scalyr/core/OrderedMultiMap.java                                                                            |    4 +
 ScalyrSite/src/com/scalyr/core/PeriodicProfiler.java                                                                           |   25 +-
 ScalyrSite/src/com/scalyr/core/Responses.java                                                                                  |    8 +
 ScalyrSite/src/com/scalyr/core/StringInternCache.java                                                                          |    7 +-
 ScalyrSite/src/com/scalyr/core/StringUtil.java                                                                                 |   17 +-
 ScalyrSite/src/com/scalyr/core/SuccessGauge.java                                                                               |  110 ++
 ScalyrSite/src/com/scalyr/core/TestUtil.java                                                                                   |   12 +
 ScalyrSite/src/com/scalyr/core/ThreadUtil.java                                                                                 |   26 +
 ScalyrSite/src/com/scalyr/core/Util.java                                                                                       |  177 +-
 ScalyrSite/src/com/scalyr/core/regex/DFA.java                                                                                  |    8 +-
 ScalyrSite/src/com/scalyr/core/regex/GenericPattern.java                                                                       |    2 +-
 ScalyrSite/src/com/scalyr/core/regex/SMatcher.java                                                                             |   29 +-
 ScalyrSite/src/com/scalyr/core/regex/SPattern.java                                                                             |    7 +-
 ScalyrSite/src/com/scalyr/extensions/BackdoorRpcClient.java                                                                    |    2 +-
 ScalyrSite/src/com/scalyr/function/FunctionUtil.java                                                                           |   17 +
 ScalyrSite/src/com/scalyr/grpc/ClientUtil.java                                                                                 |   37 +
 ScalyrSite/src/com/scalyr/grpc/GrpcQueryNode.java                                                                              |   75 +-
 ScalyrSite/src/com/scalyr/grpc/Knobs.java                                                                                      |    1 -
 ScalyrSite/src/com/scalyr/grpc/LegacyNodeClient.java                                                                           |  166 ++
 ScalyrSite/src/com/scalyr/grpc/LegacyNodeService.java                                                                          |  136 ++
 ScalyrSite/src/com/scalyr/grpc/OpenCensusInterceptor.java                                                                      |   70 +
 ScalyrSite/src/com/scalyr/grpc/ProtoUtil.java                                                                                  |   71 +-
 ScalyrSite/src/com/scalyr/grpc/QueryMasterService.java                                                                         |    2 +-
 ScalyrSite/src/com/scalyr/grpc/QueryWorkerService.java                                                                         |   10 +-
 ScalyrSite/src/com/scalyr/grpc/RpcHandles.java                                                                                 |    3 +-
 ScalyrSite/src/com/scalyr/grpc/ServerUtil.java                                                                                 |   15 +-
 ScalyrSite/src/com/scalyr/images/ColorConversion.java                                                                          |  116 --
 ScalyrSite/src/com/scalyr/images/PhotoInfo.java                                                                                |    7 -
 ScalyrSite/src/com/scalyr/images/Point.java                                                                                    |   22 -
 ScalyrSite/src/com/scalyr/images/PointD.java                                                                                   |   91 -
 ScalyrSite/src/com/scalyr/images/RectD.java                                                                                    |  165 --
 ScalyrSite/src/com/scalyr/images/Transform.java                                                                                |  241 ---
 ScalyrSite/src/com/scalyr/introspection/Converter.java                                                                         |    4 +-
 ScalyrSite/src/com/scalyr/introspection/Filter.java                                                                            |    2 +-
 ScalyrSite/src/com/scalyr/introspection/IntrospectUtils.java                                                                   |    2 +-
 ScalyrSite/src/com/scalyr/io/IOTransform.java                                                                                  |  172 +-
 ScalyrSite/src/com/scalyr/io/LZ4StreamCompressor.java                                                                          |   22 +-
 ScalyrSite/src/com/scalyr/io/RandomAccessFileWithPath.java                                                                     |   23 +
 ScalyrSite/src/com/scalyr/io/ScalyrCipherInputStream.java                                                                      |  157 ++
 ScalyrSite/src/com/scalyr/io/SectionInputStream.java                                                                           |    4 +-
 ScalyrSite/src/com/scalyr/json/CommentPreservingPrettyprinter.java                                                             |    2 +-
 ScalyrSite/src/com/scalyr/json/JsonArray.java                                                                                  |   12 +-
 ScalyrSite/src/com/scalyr/json/JsonObject.java                                                                                 |  143 +-
 ScalyrSite/src/com/scalyr/json/JsonSerializer.java                                                                             |   56 +
 ScalyrSite/src/com/scalyr/json/JsonTestUtil.java                                                                               |   23 +-
 ScalyrSite/src/com/scalyr/json/JsonUtil.java                                                                                   |    2 +-
 ScalyrSite/src/com/scalyr/log/L.java                                                                                           |  118 +-
 ScalyrSite/src/com/scalyr/log/Levents.java                                                                                     |  192 +-
 ScalyrSite/src/com/scalyr/metrics/DiskSampler.java                                                                             |  190 --
 ScalyrSite/src/com/scalyr/metrics/EventGraphEmitter.java                                                                       |  494 -----
 ScalyrSite/src/com/scalyr/metrics/GraphEmitter.java                                                                            |  382 ----
 ScalyrSite/src/com/scalyr/metrics/Histogram.java                                                                               |   13 +-
 ScalyrSite/src/com/scalyr/metrics/HistogramBundle.java                                                                         |    4 +-
 ScalyrSite/src/com/scalyr/metrics/Sampler.java                                                                                 |   41 -
 ScalyrSite/src/com/scalyr/parse/CodeParser.java                                                                                |   91 +-
 ScalyrSite/src/com/scalyr/parse/CodeTokenizer.java                                                                             |  111 +-
 ScalyrSite/src/com/scalyr/queryexec/EpochState.java                                                                            |  289 ++-
 ScalyrSite/src/com/scalyr/queryexec/GlobalQueryState.java                                                                      |  164 +-
 ScalyrSite/src/com/scalyr/queryexec/LegacyQueryPlanner.java                                                                    |   55 +-
 ScalyrSite/src/com/scalyr/queryexec/PreSowUtils.java                                                                           |   14 +-
 ScalyrSite/src/com/scalyr/queryexec/QueryExecutive.java                                                                        |   32 +-
 ScalyrSite/src/com/scalyr/queryexec/QueryMaster.java                                                                           |  329 ++--
 ScalyrSite/src/com/scalyr/queryexec/QueryPlanner.java                                                                          |  405 +++-
 ScalyrSite/src/com/scalyr/queryexec/QueryState.java                                                                            |  149 +-
 ScalyrSite/src/com/scalyr/queryexec/QueryWorker.java                                                                           |  223 ++-
 ScalyrSite/src/com/scalyr/queryexec/README.md                                                                                  |   64 +-
 ScalyrSite/src/com/scalyr/queryexec/RemoteQueryNode.java                                                                       |   14 +-
 ScalyrSite/src/com/scalyr/queryexec/complex/GroupingTable.java                                                                 |  640 +++++++
 ScalyrSite/src/com/scalyr/queryexec/complex/GroupingTableRowKey.java                                                           |  352 ++++
 ScalyrSite/src/com/scalyr/queryexec/complex/GroupingTableRowMap.java                                                           |  167 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/Knobs.java                                                                         |   28 +
 ScalyrSite/src/com/scalyr/queryexec/complex/MemoryManipulation.java                                                            |   93 +
 ScalyrSite/src/com/scalyr/queryexec/complex/README.md                                                                          |   74 +
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnAny.java                                                             |   46 +
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnEstimateDistinct.java                                                |  133 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnFirst.java                                                           |   34 +
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnLast.java                                                            |   30 +
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnOldestNewest.java                                                    |   74 +
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnPercentile.java                                                      |  109 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnSingleton.java                                                       |   48 +
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnStdDev.java                                                          |  111 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/GroupingTableColumn.java                                                   |  278 +++
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/SimpleNumericColumns.java                                                  |  212 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ValueStoringColumn.java                                                    |  373 ++++
 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/CodeGenerator.java                                                        |  450 +++++
 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/ComplexQueryCompiler.java                                                 |  511 +++++
 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/ComplexQueryParser.java                                                   |  671 +++++++
 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/ExpressionNode.java                                                       |  275 +++
 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/GroupingPhaseSpecification.java                                           |  311 +++
 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/QueryCommand.java                                                         |  433 +++++
 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/QueryExecutionStage.java                                                  |   47 +
 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/README.md                                                                 |    7 +
 ScalyrSite/src/com/scalyr/queryexec/complex/execution/ComplexQueryEngine.java                                                  |  173 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/execution/ComplexQueryResult.java                                                  |  190 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/execution/ComplexQueryResultAspect.java                                            |  497 +++++
 ScalyrSite/src/com/scalyr/queryexec/complex/execution/ComplexQueryResultAspectSpec.java                                        |   59 +
 ScalyrSite/src/com/scalyr/queryexec/complex/execution/ComplexQueryUIGlue.java                                                  |  213 +++
 ScalyrSite/src/com/scalyr/queryexec/complex/execution/UserDefinedLookupTable.java                                              |  238 +++
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/LookupEngine.java                                                        |  175 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/LookupFunctions.java                                                     |  165 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/MiscellaneousFunctions.java                                              |  275 +++
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/NumericConversions.java                                                  |  219 +++
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/NumericFunctions.java                                                    |  193 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/OnTheFlyParser.java                                                      |  351 ++++
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/ParsingFunctions.java                                                    |  101 +
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/QueryExecutionStep.java                                                  |  149 ++
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/README.md                                                                |   11 +
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/StepFactory.java                                                         |  273 +++
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/StepFactoryUtilities.java                                                |  236 +++
 ScalyrSite/src/com/scalyr/queryexec/complex/functions/StringFunctions.java                                                     |  506 +++++
 ScalyrSite/src/com/scalyr/s3/EpochSyncManager.java                                                                             |  336 +++-
 ScalyrSite/src/com/scalyr/s3/Knobs.java                                                                                        |   34 +-
 ScalyrSite/src/com/scalyr/s3/S3Service.java                                                                                    |   80 +-
 ScalyrSite/src/com/scalyr/server/BatchingEmailNotifier.java                                                                    |    4 +-
 ScalyrSite/src/com/scalyr/server/CrashReporter.java                                                                            |   47 +-
 ScalyrSite/src/com/scalyr/server/CronPool.java                                                                                 |   10 +-
 ScalyrSite/src/com/scalyr/server/DefaultServlet.java                                                                           |    2 +-
 ScalyrSite/src/com/scalyr/server/ErrorConsolidationServer.java                                                                 |   86 +-
 ScalyrSite/src/com/scalyr/server/ErrorPages.java                                                                               |  195 +-
 ScalyrSite/src/com/scalyr/server/ErrorReportFormatter.java                                                                     |   66 +-
 ScalyrSite/src/com/scalyr/server/GlobalFilter.java                                                                             |    8 +-
 ScalyrSite/src/com/scalyr/server/GlobalFilterLogic.java                                                                        |    4 +-
 ScalyrSite/src/com/scalyr/server/GlobalState.java                                                                              |  135 +-
 ScalyrSite/src/com/scalyr/server/Includer.java                                                                                 |   26 +
 ScalyrSite/src/com/scalyr/server/MockHttpServletRequest.java                                                                   |   25 +-
 ScalyrSite/src/com/scalyr/server/MockHttpServletResponse.java                                                                  |   40 +-
 ScalyrSite/src/com/scalyr/server/RateLimiter.java                                                                              |   13 +
 ScalyrSite/src/com/scalyr/server/ServerStatus.java                                                                             |  391 ++++
 ScalyrSite/src/com/scalyr/server/StaticFileCache.java                                                                          |    2 +-
 ScalyrSite/src/com/scalyr/serverSimulator/SimulatedLogFile.java                                                                |   26 +-
 ScalyrSite/src/com/scalyr/serverSimulator/SoLoMoLoggingReporter.java                                                           |    6 +-
 ScalyrSite/src/com/scalyr/serverSimulator/SoLoMoMain.java                                                                      |    2 +-
 ScalyrSite/src/com/scalyr/tasks/AlertNotificationChannel.java                                                                  |   51 +
 ScalyrSite/src/com/scalyr/tasks/AlertNotificationParameters.java                                                               |   70 +
 ScalyrSite/src/com/scalyr/tasks/DurableQueueManager.java                                                                       |  462 ++---
 ScalyrSite/src/com/scalyr/tasks/DurableTaskManager.java                                                                        |   16 +-
 ScalyrSite/src/com/scalyr/tasks/EmailTask.java                                                                                 |   14 +-
 ScalyrSite/src/com/scalyr/tasks/HipChatApiTask.java                                                                            |  146 --
 ScalyrSite/src/com/scalyr/tasks/HipChatV2ApiTask.java                                                                          |  150 --
 ScalyrSite/src/com/scalyr/tasks/OpsGenieApiTask.java                                                                           |  102 +-
 ScalyrSite/src/com/scalyr/tasks/PagerDutyApiTask.java                                                                          |  141 +-
 ScalyrSite/src/com/scalyr/tasks/SendGridEmailApiTask.java                                                                      |   15 +
 ScalyrSite/src/com/scalyr/tasks/SlackApiTask.java                                                                              |  373 ++--
 ScalyrSite/src/com/scalyr/tasks/VictorOpsApiTask.java                                                                          |  284 +--
 ScalyrSite/src/com/scalyr/tasks/WebhookTask.java                                                                               |  162 +-
 ScalyrSite/src/com/scalyr/tasks/WebhookTaskNotification.java                                                                   |   16 +-
 ScalyrSite/src/com/scalyr/thirdparty/org/jnumbers/NumberParser.java                                                            |  218 +++
 ScalyrSite/src/com/scalyr/workload/Disruptor.java                                                                              |    9 +-
 ScalyrSite/src/com/scalyr/workload/WorkloadManager.java                                                                        |    2 +-
 ScalyrSite/src/db/api/KeyValueStore.java                                                                                       |    2 +-
 ScalyrSite/src/db/directdb/AbstractDb.java                                                                                     |   29 +
 ScalyrSite/src/db/directdb/BoundaryFinder.java                                                                                 |    2 +-
 ScalyrSite/src/db/directdb/CompactionManager.java                                                                              |   32 +-
 ScalyrSite/src/db/directdb/Compactor.java                                                                                      |  253 +--
 ScalyrSite/src/db/directdb/DbTransaction.java                                                                                  |    3 +
 ScalyrSite/src/db/directdb/DirectDb.java                                                                                       |  194 +-
 ScalyrSite/src/db/directdb/DirectDbKeyValueStore.java                                                                          |    4 +
 ScalyrSite/src/db/directdb/DirectDbReadView.java                                                                               |    3 +
 ScalyrSite/src/db/directdb/DirectDbUtil.java                                                                                   |   55 +-
 ScalyrSite/src/db/directdb/DiskSegment.java                                                                                    |    7 +-
 ScalyrSite/src/db/directdb/DiskSegmentGenerator.java                                                                           |    6 +-
 ScalyrSite/src/db/directdb/DoubleMetaDb.java                                                                                   |   44 +-
 ScalyrSite/src/db/directdb/LogEmitter.java                                                                                     |    4 +-
 ScalyrSite/src/db/directdb/LogScanner.java                                                                                     |   19 +-
 ScalyrSite/src/db/directdb/RecompressionManager.java                                                                           |    2 +-
 ScalyrSite/src/logs/api/BatchInsertApiHandler.java                                                                             |  127 +-
 ScalyrSite/src/logs/api/ComplexQueryApiHandler.java                                                                            |  147 ++
 ScalyrSite/src/logs/api/CreateTimeseriesApiHandler.java                                                                        |    4 +
 ScalyrSite/src/logs/api/LogAddEventsHandler.java                                                                               |  337 ++--
 ScalyrSite/src/logs/api/LogQueryApiHandler.java                                                                                |    2 +-
 ScalyrSite/src/logs/api/LogVolumeTracker.java                                                                                  |    9 +-
 ScalyrSite/src/logs/api/LogplexApiHandler.java                                                                                 |   54 +-
 ScalyrSite/src/logs/api/QueryApiHandler.java                                                                                   |    2 +-
 ScalyrSite/src/logs/api/TimeseriesQueryApiHandler.java                                                                         |   44 +-
 ScalyrSite/src/logs/backend/AccountEventLogger.java                                                                            |   16 +-
 ScalyrSite/src/logs/backend/DatabaseHandles.java                                                                               |   10 +-
 ScalyrSite/src/logs/backend/EventParser.java                                                                                   |  226 +--
 ScalyrSite/src/logs/backend/HostState.java                                                                                     |  148 +-
 ScalyrSite/src/logs/backend/K8sController.java                                                                                 |  253 +++
 ScalyrSite/src/logs/backend/K8sDeployment.java                                                                                 |  162 --
 ScalyrSite/src/logs/backend/K8sKind.java                                                                                       |   82 +
 ScalyrSite/src/logs/backend/PreferenceCache.java                                                                               |   67 +-
 ScalyrSite/src/logs/backend/TimeseriesDeltaTracker.java                                                                        |    2 +-
 ScalyrSite/src/logs/backend/UserActivity.java                                                                                  |  114 ++
 ScalyrSite/src/logs/backend/dashboards/DashboardConfigFile.java                                                                |  105 +-
 ScalyrSite/src/logs/backend/events/Tagged.java                                                                                 |  407 ++++
 ScalyrSite/src/logs/backend/events/alerts/AlertConfigFile.java                                                                 |  232 +--
 ScalyrSite/src/logs/backend/events/alerts/AlertLogLineFetcher.java                                                             |  232 +++
 ScalyrSite/src/logs/backend/events/alerts/AlertMonitorThread.java                                                              |  176 +-
 ScalyrSite/src/logs/backend/events/alerts/AlertNotificationFormatting.java                                                     |  161 ++
 ScalyrSite/src/logs/backend/events/alerts/AlertTask.java                                                                       |  808 ++------
 ScalyrSite/src/logs/backend/events/archiver/EpochDividingEventFetcher.java                                                     |   12 +-
 ScalyrSite/src/logs/backend/events/archiver/QueryArchiveEventFetcher.java                                                      |   44 +-
 ScalyrSite/src/logs/backend/events/archiver/S3ArchiveManager.java                                                              |  357 ++--
 ScalyrSite/src/logs/backend/events/archiver/ShardEventFetcher.java                                                             |   60 +-
 ScalyrSite/src/logs/backend/events/data/AttributeListResult.java                                                               |  253 +++
 ScalyrSite/src/logs/backend/events/data/AttributeListSpec.java                                                                 |  401 ++++
 ScalyrSite/src/logs/backend/events/data/DebugSink.java                                                                         |   18 +-
 ScalyrSite/src/logs/backend/events/data/EpochId.java                                                                           |   98 +-
 ScalyrSite/src/logs/backend/events/data/EventDbLimits.java                                                                     |   37 +-
 ScalyrSite/src/logs/backend/events/data/EventHandle.java                                                                       |    5 +-
 ScalyrSite/src/logs/backend/events/data/EventQuerier.java                                                                      |    2 +-
 ScalyrSite/src/logs/backend/events/data/EventQuery.java                                                                        |   32 +-
 ScalyrSite/src/logs/backend/events/data/EventQueryUtils.java                                                                   |  161 +-
 ScalyrSite/src/logs/backend/events/data/EventRepository.java                                                                   |  277 ++-
 ScalyrSite/src/logs/backend/events/data/QueryPlan.java                                                                         |    2 +-
 ScalyrSite/src/logs/backend/events/data/QueryResult.java                                                                       |   92 +-
 ScalyrSite/src/logs/backend/events/data/RepoEventBuilder.java                                                                  |   14 +-
 ScalyrSite/src/logs/backend/events/data/ResolveHHHashesResult.java                                                             |    7 +-
 ScalyrSite/src/logs/backend/events/data/ResolveHHHashesToHistogramsResult.java                                                 |    3 +-
 ScalyrSite/src/logs/backend/events/data/ResultAspect.java                                                                      |  272 +--
 ScalyrSite/src/logs/backend/events/data/ResultAspectSpec.java                                                                  |  412 +---
 ScalyrSite/src/logs/backend/events/data/reference/SimpleEventDb.java                                                           |    3 +-
 ScalyrSite/src/logs/backend/events/data/reference/SimpleEventDbFilterUtil.java                                                 |   29 -
 ScalyrSite/src/logs/backend/events/db/AddHostStatesTask.java                                                                   |   23 +-
 ScalyrSite/src/logs/backend/events/db/CrossShardMultiQueryExecutor.java                                                        |   89 +-
 ScalyrSite/src/logs/backend/events/db/DataTruncationThread.java                                                                |   62 +-
 ScalyrSite/src/logs/backend/events/db/EpochImportHelper.java                                                                   |   63 +-
 ScalyrSite/src/logs/backend/events/db/EpochLayers.java                                                                         |   53 +-
 ScalyrSite/src/logs/backend/events/db/EpochListDb.java                                                                         | 1051 ++++++----
 ScalyrSite/src/logs/backend/events/db/EpochListDbEventImporter.java                                                            |  222 ++-
 ScalyrSite/src/logs/backend/events/db/EpochListDbOptions.java                                                                  |   10 +
 ScalyrSite/src/logs/backend/events/db/EpochListDbSchema.java                                                                   |  140 +-
 ScalyrSite/src/logs/backend/events/db/EpochManager.java                                                                        |  616 +++---
 ScalyrSite/src/logs/backend/events/db/EpochPurgerThread.java                                                                   |   33 +-
 ScalyrSite/src/logs/backend/events/db/EpochSeriesSpec.java                                                                     |    2 +-
 ScalyrSite/src/logs/backend/events/db/EpochSeriesState.java                                                                    |  197 +-
 ScalyrSite/src/logs/backend/events/db/EventDb.java                                                                             |   37 +-
 ScalyrSite/src/logs/backend/events/db/EventImporter.java                                                                       |  112 +-
 ScalyrSite/src/logs/backend/events/db/ForkingEventDb.java                                                                      |   16 +-
 ScalyrSite/src/logs/backend/events/db/FreezerThread.java                                                                       |  450 +++--
 ScalyrSite/src/logs/backend/events/db/FrozenEpochCatchupThread.java                                                            |  161 ++
 ScalyrSite/src/logs/backend/events/db/HistogramBuilderThread.java                                                              |   45 +-
 ScalyrSite/src/logs/backend/events/db/IngestionStateManager.java                                                               |  104 +-
 ScalyrSite/src/logs/backend/events/db/LogUploadTracker.java                                                                    |  166 +-
 ScalyrSite/src/logs/backend/events/db/PreintersectedEpochBuilder.java                                                          |   58 +-
 ScalyrSite/src/logs/backend/events/db/RawMemory.java                                                                           |   64 +-
 ScalyrSite/src/logs/backend/events/db/ScalyrLogsSettings.java                                                                  |   48 +-
 ScalyrSite/src/logs/backend/events/db/ServerInfoManager.java                                                                   |   92 -
 ScalyrSite/src/logs/backend/events/db/SliceSummaryBuilder.java                                                                 |    3 +-
 ScalyrSite/src/logs/backend/events/db/SubAccountConfigTracker.java                                                             |   16 +-
 ScalyrSite/src/logs/backend/events/db/SubAccounts.java                                                                         |  151 +-
 ScalyrSite/src/logs/backend/events/db/TimeseriesManager.java                                                                   |   22 +-
 ScalyrSite/src/logs/backend/events/db/columns/AbstractColumnEventDb.java                                                       |   30 +-
 ScalyrSite/src/logs/backend/events/db/columns/ColumnData.java                                                                  |  103 +-
 ScalyrSite/src/logs/backend/events/db/columns/ColumnDbQuerier.java                                                             |  116 +-
 ScalyrSite/src/logs/backend/events/db/columns/ColumnEventDb.java                                                               |   85 +-
 ScalyrSite/src/logs/backend/events/db/columns/ColumnProber.java                                                                |  126 +-
 ScalyrSite/src/logs/backend/events/db/columns/PreintersectionContainer.java                                                    |   12 +-
 ScalyrSite/src/logs/backend/events/db/columns/SharedColumnEpochData.java                                                       |   12 +-
 ScalyrSite/src/logs/backend/events/db/columns/TimestampEncoder.java                                                            |    3 +-
 ScalyrSite/src/logs/backend/events/db/epochs/AbstractEpoch.java                                                                |   90 +
 ScalyrSite/src/logs/backend/events/db/epochs/EpochIterator.java                                                                |   22 +
 ScalyrSite/src/logs/backend/events/db/epochs/EpochRange.java                                                                   |   29 +
 ScalyrSite/src/logs/backend/events/db/epochs/MergingIterator.java                                                              |   52 +
 ScalyrSite/src/logs/backend/events/db/epochs/SingleEpochIterator.java                                                          |   12 +
 ScalyrSite/src/logs/backend/events/db/file/EpochFile.java                                                                      |  285 ++-
 ScalyrSite/src/logs/backend/events/db/file/EpochFileKeyValueStore.java                                                         |    5 +-
 ScalyrSite/src/logs/backend/events/db/file/EpochFileManager.java                                                               |   50 +-
 ScalyrSite/src/logs/backend/events/db/file/EpochFileMetadata.java                                                              |   23 +-
 ScalyrSite/src/logs/backend/events/db/file/EpochFileOutputStream.java                                                          |   19 +
 ScalyrSite/src/logs/backend/events/reports/EstimateUniqueValues.java                                                           |    2 +
 ScalyrSite/src/logs/backend/events/reports/ReportDisplay.java                                                                  |    9 +-
 ScalyrSite/src/logs/backend/events/reports/ReportExecutor.java                                                                 |    2 +-
 ScalyrSite/src/logs/backend/events/reports/ReportResult.java                                                                   |    1 +
 ScalyrSite/src/logs/backend/events/reports/ReportSpec.java                                                                     |    4 +-
 ScalyrSite/src/logs/backend/events/reports/SummaryQueryResult.java                                                             |   13 +-
 ScalyrSite/src/logs/backend/events/tsdb/SummaryStore.java                                                                      |    9 +-
 ScalyrSite/src/logs/backend/events/tsdb/TSStateBundle.java                                                                     |    2 +-
 ScalyrSite/src/logs/backend/monitors/AbstractS3BucketMonitor.java                                                              |  920 ---------
 ScalyrSite/src/logs/backend/monitors/CloudTrailMonitor.java                                                                    |   55 -
 ScalyrSite/src/logs/backend/monitors/Monitor.java                                                                              |    4 +
 ScalyrSite/src/logs/backend/monitors/MonitorConfigFile.java                                                                    |   34 +-
 ScalyrSite/src/logs/backend/monitors/MonitorManager.java                                                                       |    7 +-
 ScalyrSite/src/logs/backend/monitors/RdsLogMonitor.java                                                                        |  100 +-
 ScalyrSite/src/logs/backend/monitors/S3BucketMonitor.java                                                                      |  610 ++----
 ScalyrSite/src/logs/backend/monitors/S3BucketMonitorLogging.java                                                               |  120 ++
 ScalyrSite/src/logs/backend/monitors/S3BucketMonitorTuning.java                                                                |  202 ++
 ScalyrSite/src/logs/backend/monitors/S3ImportEventInserter.java                                                                |  321 ++++
 ScalyrSite/src/logs/backend/monitors/S3ImportReadme.md                                                                         |   29 +
 ScalyrSite/src/logs/backend/monitors/S3ImportUtilities.java                                                                    |  148 ++
 ScalyrSite/src/logs/backend/monitors/S3Importer.java                                                                           |  721 +++++++
 ScalyrSite/src/logs/backend/monitors/S3MessageProcessor.java                                                                   |  546 ++++++
 ScalyrSite/src/logs/backend/monitors/StatisticsMap.java                                                                        |   35 +
 ScalyrSite/src/logs/frontend/DurableEventQueue.java                                                                            |  323 ++--
 ScalyrSite/src/logs/frontend/FrontendManager.java                                                                              |    5 +-
 ScalyrSite/src/logs/frontend/IngestionMetricTracker.java                                                                       |    2 +-
 ScalyrSite/src/logs/frontend/QueueServerEventProcessing.java                                                                   |  331 +++-
 ScalyrSite/src/logs/parsing/ArenaBasedHashMap.java                                                                             |   92 +-
 ScalyrSite/src/logs/parsing/AttributeAccumulator.java                                                                          |    6 +-
 ScalyrSite/src/logs/parsing/InputBuffer.java                                                                                   |    7 +-
 ScalyrSite/src/logs/parsing/LogAnnotator.java                                                                                  |   27 +-
 ScalyrSite/src/logs/parsing/LogAnnotator2.java                                                                                 |  638 +++++--
 ScalyrSite/src/logs/parsing/LogLineGrouperSpecs.java                                                                           |    4 +-
 ScalyrSite/src/logs/parsing/LogLineParser.java                                                                                 |   33 +-
 ScalyrSite/src/logs/parsing/LogParseUtil.java                                                                                  |  164 +-
 ScalyrSite/src/logs/parsing/MultiLineCombiner.java                                                                             |    4 +
 ScalyrSite/src/org/fusesource/hawtjni/runtime/ArgFlag.java                                                                     |   81 -
 ScalyrSite/src/org/fusesource/hawtjni/runtime/Callback.java                                                                    |  263 ---
 ScalyrSite/src/org/fusesource/hawtjni/runtime/ClassFlag.java                                                                   |   46 -
 ScalyrSite/src/org/fusesource/hawtjni/runtime/FieldFlag.java                                                                   |   35 -
 ScalyrSite/src/org/fusesource/hawtjni/runtime/JNIEnv.java                                                                      |   18 -
 ScalyrSite/src/org/fusesource/hawtjni/runtime/JniArg.java                                                                      |   27 -
 ScalyrSite/src/org/fusesource/hawtjni/runtime/JniClass.java                                                                    |   29 -
 ScalyrSite/src/org/fusesource/hawtjni/runtime/JniField.java                                                                    |   30 -
 ScalyrSite/src/org/fusesource/hawtjni/runtime/JniMethod.java                                                                   |   33 -
 ScalyrSite/src/org/fusesource/hawtjni/runtime/Library.java                                                                     |  355 ----
 ScalyrSite/src/org/fusesource/hawtjni/runtime/MethodFlag.java                                                                  |  116 --
 ScalyrSite/src/org/fusesource/hawtjni/runtime/NativeStats.java                                                                 |  221 ---
 ScalyrSite/src/org/fusesource/hawtjni/runtime/PointerMath.java                                                                 |   27 -
 ScalyrSite/src/org/fusesource/hawtjni/runtime/T32.java                                                                         |   19 -
 ScalyrSite/src/proto/query_worker.proto                                                                                        |   81 +-
 ScalyrSite/src/resources/db/migration/README.md                                                                                |   31 +
 ScalyrSite/src/resources/db/migration/V001__Baseline.sql                                                                       |   13 +
 ScalyrSite/src/resources/db/migration/V002__Create_redaction_rules_table.sql                                                   |   17 +
 ScalyrSite/src/web/scalyr/api/ApiError.java                                                                                    |   77 +
 ScalyrSite/src/web/scalyr/api/ApiException.java                                                                                |   38 +
 ScalyrSite/src/web/scalyr/api/ValidationDetails.java                                                                           |   24 +
 ScalyrSite/src/web/scalyr/api/db/ScrubbingRuleDAO.java                                                                         |  163 ++
 ScalyrSite/src/web/scalyr/api/db/SessionDAO.java                                                                               |   19 +
 ScalyrSite/src/web/scalyr/api/db/UserDAO.java                                                                                  |   19 +
 ScalyrSite/src/web/scalyr/api/db/models/ScrubbingRule.java                                                                     |  156 ++
 ScalyrSite/src/web/scalyr/api/db/models/SessionDateTime.java                                                                   |   29 +
 ScalyrSite/src/web/scalyr/api/db/models/SessionInfo.java                                                                       |   93 +
 ScalyrSite/src/web/scalyr/api/db/models/SessionRecord.java                                                                     |   43 +
 ScalyrSite/src/web/scalyr/api/db/models/UserRecord.java                                                                        |   83 +
 ScalyrSite/src/web/scalyr/api/jersey/ApiApplication.java                                                                       |   31 +
 ScalyrSite/src/web/scalyr/api/jersey/ApiExceptionHandler.java                                                                  |   22 +
 ScalyrSite/src/web/scalyr/api/jersey/ApiPrincipal.java                                                                         |   22 +
 ScalyrSite/src/web/scalyr/api/jersey/ApiSecurityContext.java                                                                   |   47 +
 ScalyrSite/src/web/scalyr/api/jersey/ApplicationBinder.java                                                                    |   16 +
 ScalyrSite/src/web/scalyr/api/jersey/AuthenticationFilter.java                                                                 |   53 +
 ScalyrSite/src/web/scalyr/api/jersey/IsoDateTimeDeserializer.java                                                              |   11 +
 ScalyrSite/src/web/scalyr/api/jersey/NotFoundExceptionHandler.java                                                             |   23 +
 ScalyrSite/src/web/scalyr/api/jersey/ObjectMapperProvider.java                                                                 |   17 +
 ScalyrSite/src/web/scalyr/api/resources/Demo.java                                                                              |   47 +
 ScalyrSite/src/web/scalyr/api/resources/ScrubbingRules.java                                                                    |   60 +
 ScalyrSite/src/web/scalyr/api/services/AuthService.java                                                                        |   89 +
 ScalyrSite/src/web/scalyr/api/services/DBService.java                                                                          |    7 +
 ScalyrSite/src/web/scalyr/api/services/GlobalService.java                                                                      |   55 +
 ScalyrSite/src/web/scalyr/api/services/JdbiDBService.java                                                                      |  119 ++
 ScalyrSite/src/web/scalyr/data/Entity.java                                                                                     |   12 +-
 ScalyrSite/src/web/scalyr/data/NameLookup.java                                                                                 |   40 +-
 ScalyrSite/src/web/scalyr/data/SessionState.java                                                                               |   16 +-
 ScalyrSite/src/web/scalyr/data/sql/DualConnectionPool.java                                                                     |    6 +
 ScalyrSite/src/web/scalyr/data/sql/DualConnectionWrapper.java                                                                  |    3 +
 ScalyrSite/src/web/scalyr/data/sql/ResultSetWrapper.java                                                                       |    2 +-
 ScalyrSite/src/web/scalyr/data/sql/SqlBuilder.java                                                                             |   35 +-
 ScalyrSite/src/web/scalyr/data/sql/SqlDataStoreImpl.java                                                                       |  438 +----
 ScalyrSite/src/web/scalyr/data/sql/SqlSchema.java                                                                              |  382 ++++
 ScalyrSite/src/web/scalyr/events/ui/AppUI.java                                                                                 |    9 -
 ScalyrSite/src/web/scalyr/events/ui/EventRenderer.java                                                                         |    5 +-
 ScalyrSite/src/web/scalyr/events/ui/EventViewWidget.java                                                                       |   10 +-
 ScalyrSite/src/web/scalyr/events/ui/GraphBuilder.java                                                                          |   15 +-
 ScalyrSite/src/web/scalyr/events/ui/NumericQueryManager.java                                                                   |   30 +-
 ScalyrSite/src/web/scalyr/events/ui/SetPhoenixPreferenceHandler.java                                                           |    4 +-
 ScalyrSite/src/web/scalyr/events/ui/UsagePlanState.java                                                                        |   93 +-
 ScalyrSite/src/web/scalyr/events/ui/UserManagement.java                                                                        |   20 +-
 ScalyrSite/src/web/scalyr/mail/RedirectingServletResponse.java                                                                 |   83 -
 ScalyrSite/src/web/scalyr/mail/SendGridApiUtils.java                                                                           |   85 +-
 ScalyrSite/src/web/scalyr/tools/EntryFilter.java                                                                               |    2 +-
 ScalyrSite/src/web/scalyr/tools/GoogleClosureCompilerWrapper.java                                                              |    2 +-
 ScalyrSite/src/web/scalyr/tools/MarkdownChecker.java                                                                           |   10 +-
 ScalyrSite/src/web/scalyr/tools/MarkdownMaker.java                                                                             |  306 ---
 ScalyrSite/src/web/scalyr/ui/AjaxServlet.java                                                                                  |  189 +-
 ScalyrSite/src/web/scalyr/ui/AuthUtils.java                                                                                    |   95 +-
 ScalyrSite/src/web/scalyr/ui/ConfigEditor.java                                                                                 |   14 +-
 ScalyrSite/src/web/scalyr/ui/LabsSettings.java                                                                                 |  376 ++--
 ScalyrSite/src/web/scalyr/ui/LoginServlet.java                                                                                 |   27 +-
 ScalyrSite/src/web/scalyr/ui/OverageNotificationSettings.java                                                                  |  120 ++
 ScalyrSite/src/web/scalyr/ui/OverageNotificationThread.java                                                                    |  353 ++++
 ScalyrSite/src/web/scalyr/ui/PasswordResetServlet.java                                                                         |    5 +-
 ScalyrSite/src/web/scalyr/ui/Preferences.java                                                                                  |  106 +-
 ScalyrSite/src/web/scalyr/ui/RegisterUserServlet.java                                                                          |    4 +-
 ScalyrSite/src/web/scalyr/ui/SSOLoginServlet.java                                                                              |    8 +-
 ScalyrSite/src/web/scalyr/ui/ScalyrServerDefinition.java                                                                       |   15 +-
 ScalyrSite/src/web/scalyr/ui/SelfServiceDemo.java                                                                              |    6 +-
 ScalyrSite/src/web/scalyr/ui/ServerState.java                                                                                  |   63 +-
 ScalyrSite/src/web/scalyr/ui/events/DashboardGraphsGenerator.java                                                              |  108 ++
 ScalyrSite/src/web/scalyr/ui/events/EventRenderParams.java                                                                     |  119 +-
 ScalyrSite/src/web/scalyr/ui/events/GetGraphHtmlHandler.java                                                                   |    2 +-
 ScalyrSite/src/web/scalyr/ui/events/GetLogEntriesHandler.java                                                                  |   40 +-
 ScalyrSite/src/web/scalyr/ui/events/GetSourcesAndLogsHandler.java                                                              |  147 +-
 ScalyrSite/src/web/scalyr/ui/events/GetTopFacetsHandler.java                                                                   |   18 +-
 ScalyrSite/src/web/scalyr/ui/events/GraphHelper.java                                                                           |  251 +++
 ScalyrSite/src/web/scalyr/ui/events/PhoenixGraph.java                                                                          |  152 +-
 ScalyrSite/src/web/scalyr/ui/events/PlotParams.java                                                                            |   59 +-
 ScalyrSite/src/web/scalyr/ui/events/PlotParsedParams.java                                                                      |    5 +-
 ScalyrSite/src/web/scalyr/ui/events/QueryUtils.java                                                                            |   24 +-
 ScalyrSite/src/web/scalyr/ui/events/TimelinePlot.java                                                                          |   12 +-
 ScalyrSite/src/web/scalyr/ui/events/UIHelper.java                                                                              |  106 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/AlertDetailsPageHandler.java                                                         |   17 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/AlertPageHandler.java                                                                |   93 -
 ScalyrSite/src/web/scalyr/ui/pagehandlers/AlertsPageHandler.java                                                               |  100 -
 ScalyrSite/src/web/scalyr/ui/pagehandlers/BaseDashboardPageHandler.java                                                        |  336 ++--
 ScalyrSite/src/web/scalyr/ui/pagehandlers/BaseEventsPageModeHandler.java                                                       |  107 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/BillingPlanPageHandler.java                                                          |   17 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/EventsPageLogModeHandler.java                                                        |   55 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/LabsPageHandler.java                                                                 |    6 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/LogOverviewPageHandler.java                                                          |   12 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/LogProcessingPageHandler.java                                                        |   63 +
 ScalyrSite/src/web/scalyr/ui/pagehandlers/LoginPageHandler.java                                                                |   69 +
 ScalyrSite/src/web/scalyr/ui/pagehandlers/MultiStepQueryPageHandler.java                                                       |  119 ++
 ScalyrSite/src/web/scalyr/ui/pagehandlers/NewDashboardPageHandler.java                                                         |  197 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/OldDashboardPageHandler.java                                                         |   15 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/PageHandlerRegistry.java                                                             |   10 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/ParsersPageHandler.java                                                              |    2 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/SearchGraphPageHandler.java                                                          |    7 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/SearchLogsPageHandler.java                                                           |   18 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/TabbedAlertsPageHandler.java                                                         |   15 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/TemplatedPageHandler.java                                                            |   93 +-
 ScalyrSite/src/web/scalyr/ui/pagehandlers/VerifyEmailPageHandler.java                                                          |   81 +
 ScalyrSite/src/web/scalyr/ui/sso/SSOUtils.java                                                                                 |    5 +-
 ScalyrSite/src/web/scalyr/ui/sso/saml/IdPMetadata.java                                                                         |   29 +-
 ScalyrSite/src/web/scalyr/ui/sso/saml/SAMLIdP.java                                                                             |   40 +-
 ScalyrSite/src/web/scalyr/ui/sso/saml/SAMLResponse.java                                                                        |    2 +-
 ScalyrSite/src/web/scalyr/ui/sso/saml/SAMLResponseProcessor.java                                                               |   15 +-
 ScalyrSite/src/web/scalyr/ui/sso/saml/StateAuthnRequestCollectionManager.java                                                  |    4 +-
 ScalyrSite/src/web/scalyr/ui/users/AcceptLinkInvitePostHandler.java                                                            |  100 +-
 ScalyrSite/src/web/scalyr/ui/users/AddUsersHandler.java                                                                        |   22 +-
 ScalyrSite/src/web/scalyr/ui/users/UserManagementHandler.java                                                                  |    4 +-
 ScalyrSite/test/com/scalyr/actors/ActorSessionTest.java                                                                        |   71 +
 ScalyrSite/test/com/scalyr/client/HttpProxyTest.java                                                                           |   10 +-
 ScalyrSite/test/com/scalyr/collections/ByteArrayToIntMapTest.java                                                              |  129 ++
 ScalyrSite/test/com/scalyr/collections/GarbageCollectableArenaTest.java                                                        |   73 +
 ScalyrSite/test/com/scalyr/config/ConfigLogicTest.java                                                                         |   11 +-
 ScalyrSite/test/com/scalyr/config/ConfigValueDumper.java                                                                       |   90 +
 ScalyrSite/test/com/scalyr/config/EncryptionKeyManagerTest.java                                                                |   43 +
 ScalyrSite/test/com/scalyr/config/api/ConfigApiTest.java                                                                       |    9 +-
 ScalyrSite/test/com/scalyr/config/api/TestAccountApis.java                                                                     |   89 +-
 ScalyrSite/test/com/scalyr/config/api/scim/README.md                                                                           |   25 +
 ScalyrSite/test/com/scalyr/config/api/scim/ScimConvertersTest.java                                                             |  144 ++
 ScalyrSite/test/com/scalyr/config/api/scim/ScimTestUtils.java                                                                  |   88 +
 ScalyrSite/test/com/scalyr/config/api/scim/ScimUserAccountLinkerTest.java                                                      |  125 ++
 ScalyrSite/test/com/scalyr/config/api/scim/ScimUserManagementTest.java                                                         |  190 ++
 ScalyrSite/test/com/scalyr/config/backend/ShardBackendNodeTest.java                                                            |    6 +-
 ScalyrSite/test/com/scalyr/core/BatchedOpTest.java                                                                             |   55 +-
 ScalyrSite/test/com/scalyr/core/ByteUtilsTest.java                                                                             |   56 +
 ScalyrSite/test/com/scalyr/core/DateUtilTest.java                                                                              |    5 +
 ScalyrSite/test/com/scalyr/core/FileCacheTest.java                                                                             |  205 +-
 ScalyrSite/test/com/scalyr/core/HeavyHittersTest.java                                                                          |    1 +
 ScalyrSite/test/com/scalyr/core/IOUtilTest.java                                                                                |   61 +
 ScalyrSite/test/com/scalyr/core/KeyedKnobDoubleTest.java                                                                       |   31 +
 ScalyrSite/test/com/scalyr/core/KeyedKnobIntegerTest.java                                                                      |   14 +
 ScalyrSite/test/com/scalyr/core/KeyedKnobLongTest.java                                                                         |   43 +
 ScalyrSite/test/com/scalyr/core/LongRangesTest.java                                                                            |  110 ++
 ScalyrSite/test/com/scalyr/core/MurmurHashTest.java                                                                            |   46 +-
 ScalyrSite/test/com/scalyr/core/StringInternCacheTest.java                                                                     |    4 +
 ScalyrSite/test/com/scalyr/core/SuccessGaugeTest.java                                                                          |   48 +
 ScalyrSite/test/com/scalyr/core/TestUtils.java                                                                                 |   21 +-
 ScalyrSite/test/com/scalyr/core/Utf8SearchTest.java                                                                            |    3 +-
 ScalyrSite/test/com/scalyr/core/UtilTest.java                                                                                  |    9 +-
 ScalyrSite/test/com/scalyr/core/regex/GenericPatternTest.java                                                                  |    2 +
 ScalyrSite/test/com/scalyr/core/regex/SMatcherTest.java                                                                        |   74 +
 ScalyrSite/test/com/scalyr/core2/GenericTestBase.java                                                                          |   15 +-
 ScalyrSite/test/com/scalyr/function/FunctionUtilTest.java                                                                      |   12 +-
 ScalyrSite/test/com/scalyr/grpc/GrpcQueryTest.java                                                                             |  118 +-
 ScalyrSite/test/com/scalyr/grpc/GrpcS3ArchiveTest.java                                                                         |    6 +-
 ScalyrSite/test/com/scalyr/grpc/GrpcTest.java                                                                                  |   19 +
 ScalyrSite/test/com/scalyr/io/CompressSpeedTest.java                                                                           |   71 +-
 ScalyrSite/test/com/scalyr/io/IOTransformTest.java                                                                             |    3 +-
 ScalyrSite/test/com/scalyr/io/ScalyrCipherInputStreamTest.java                                                                 |   81 +
 ScalyrSite/test/com/scalyr/json/JsonTest.java                                                                                  |  196 ++
 ScalyrSite/test/com/scalyr/log/LTest.java                                                                                      |    6 +
 ScalyrSite/test/com/scalyr/log/LeventsTest.java                                                                                |   59 +-
 ScalyrSite/test/com/scalyr/metrics/HistogramTest.java                                                                          |   10 +-
 ScalyrSite/test/com/scalyr/parse/CodeTokenizerTest.java                                                                        |   42 +
 ScalyrSite/test/com/scalyr/queryexec/EpochStateTest.java                                                                       |    6 +-
 ScalyrSite/test/com/scalyr/queryexec/QueryExecutiveTest.java                                                                   |   15 +-
 ScalyrSite/test/com/scalyr/queryexec/QueryMasterMockedTest.java                                                                |  559 +++---
 ScalyrSite/test/com/scalyr/queryexec/QueryMasterScaleTests.java                                                                |  190 ++
 ScalyrSite/test/com/scalyr/queryexec/QueryMasterStaticTest.java                                                                |  124 +-
 ScalyrSite/test/com/scalyr/queryexec/QueryWorkerTest.java                                                                      |  150 +-
 ScalyrSite/test/com/scalyr/queryexec/SlowQueryMasterTest.java                                                                  |  104 +-
 ScalyrSite/test/com/scalyr/queryexec/complex/GroupingTableRowKeyTest.java                                                      |  241 +++
 ScalyrSite/test/com/scalyr/queryexec/complex/GroupingTableRowMapTest.java                                                      |   47 +
 ScalyrSite/test/com/scalyr/queryexec/complex/GroupingTableTest.java                                                            |  914 +++++++++
 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/CodeGeneratorTest.java                                                   |  625 ++++++
 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/ComplexQueryCompilerTest.java                                            |  170 ++
 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/ComplexQueryParserTest.java                                              |  207 ++
 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/ExpressionNodeTest.java                                                  |  122 ++
 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/GroupingPhaseSpecificationTest.java                                      |   54 +
 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/QueryCommandTest.java                                                    |   92 +
 ScalyrSite/test/com/scalyr/queryexec/complex/execution/ComplexQueryEngineTest.java                                             |  626 ++++++
 ScalyrSite/test/com/scalyr/queryexec/complex/execution/ComplexQueryUIGlueTest.java                                             |  283 +++
 ScalyrSite/test/com/scalyr/queryexec/complex/execution/LookupEngineTest.java                                                   |   85 +
 ScalyrSite/test/com/scalyr/queryexec/complex/execution/UserDefinedLookupTableTest.java                                         |  110 ++
 ScalyrSite/test/com/scalyr/queryexec/complex/functions/FunctionTestBase.java                                                   |   93 +
 ScalyrSite/test/com/scalyr/queryexec/complex/functions/MiscellanousFunctionsTest.java                                          |  160 ++
 ScalyrSite/test/com/scalyr/queryexec/complex/functions/NumericConversionsTest.java                                             |  108 ++
 ScalyrSite/test/com/scalyr/queryexec/complex/functions/NumericFunctionsTest.java                                               |   67 +
 ScalyrSite/test/com/scalyr/queryexec/complex/functions/OnTheFlyParserTest.java                                                 |  238 +++
 ScalyrSite/test/com/scalyr/queryexec/complex/functions/StringFunctionsTest.java                                                |  227 +++
 ScalyrSite/test/com/scalyr/s3/EpochSyncManagerTest.java                                                                        |  198 +-
 ScalyrSite/test/com/scalyr/s3/S3ServiceTest.java                                                                               |    3 +-
 ScalyrSite/test/com/scalyr/server/CrashReporterTest.java                                                                       |   60 +-
 ScalyrSite/test/com/scalyr/server/ErrorConsolidationServerTest.java                                                            |    8 +-
 ScalyrSite/test/com/scalyr/server/ErrorReportFormatterTest.java                                                                |    5 +-
 ScalyrSite/test/com/scalyr/server/ServerStatusTest.java                                                                        |   18 +
 ScalyrSite/test/com/scalyr/tasks/DurableQueueManagerTest.java                                                                  |   32 +-
 ScalyrSite/test/com/scalyr/tasks/DurableQueueManagerTestWithTimeChunk.java                                                     |   92 +
 ScalyrSite/test/com/scalyr/tasks/DurableTaskManagerTest.java                                                                   |    3 +-
 ScalyrSite/test/com/scalyr/tasks/EmailTaskTest.java                                                                            |   17 +-
 ScalyrSite/test/com/scalyr/tasks/HipChatApiTaskTest.java                                                                       |  164 --
 ScalyrSite/test/com/scalyr/tasks/HipChatV2ApiTaskTest.java                                                                     |  172 --
 ScalyrSite/test/com/scalyr/tasks/OpsGenieApiTaskTest.java                                                                      |   40 +
 ScalyrSite/test/com/scalyr/tasks/PagerDutyApiTaskTest.java                                                                     |  126 +-
 ScalyrSite/test/com/scalyr/tasks/SlackApiTaskTest.java                                                                         |   51 +
 ScalyrSite/test/com/scalyr/tasks/VictorOpsApiTaskTest.java                                                                     |   37 +
 ScalyrSite/test/com/scalyr/tasks/WebhookTaskTest.java                                                                          |    5 +-
 ScalyrSite/test/com/scalyr/testing/FailIfOpenOnFinish.java                                                                     |    1 +
 ScalyrSite/test/db/directdb/CompactionTest.java                                                                                |  240 ++-
 ScalyrSite/test/db/directdb/CompressorTest.java                                                                                |    2 +-
 ScalyrSite/test/db/directdb/DbLevelTest.java                                                                                   |    4 +-
 ScalyrSite/test/db/directdb/DirectDbEndToEndTest.java                                                                          |  116 +-
 ScalyrSite/test/db/directdb/DirectDbPerformanceTest.java                                                                       |    2 +-
 ScalyrSite/test/db/directdb/DiskSegmentGeneratorTest.java                                                                      |    6 +-
 ScalyrSite/test/db/directdb/DiskSegmentTest.java                                                                               |    4 +-
 ScalyrSite/test/db/directdb/LogTest.java                                                                                       |   12 +-
 ScalyrSite/test/db/directdb/TestWithDirectDb.java                                                                              |   60 +-
 ScalyrSite/test/logs/api/BatchInsertApiHandlerTest.java                                                                        |   82 +-
 ScalyrSite/test/logs/api/ComplexQueryApiHandlerTest.java                                                                       |  154 ++
 ScalyrSite/test/logs/api/FacetQueryApiHandlerTest.java                                                                         |    4 +-
 ScalyrSite/test/logs/api/GenericLogsApiTest.java                                                                               |    4 +-
 ScalyrSite/test/logs/api/LogAddEventsHandlerTest.java                                                                          |   32 +
 ScalyrSite/test/logs/api/LogplexApiHandlerTest.java                                                                            |   89 +-
 ScalyrSite/test/logs/api/LogplexApiHandlerTest_ParsingInQueues.java                                                            |    1 -
 ScalyrSite/test/logs/api/LogsApiTest.java                                                                                      |    6 +-
 ScalyrSite/test/logs/api/TimeseriesQueryApiHandlerTest.java                                                                    |   21 +-
 ScalyrSite/test/logs/backend/BuiltInContentTest.java                                                                           |    4 +-
 ScalyrSite/test/logs/backend/HostStateTest.java                                                                                |   37 +-
 ScalyrSite/test/logs/backend/TimeseriesDeltaTrackerTest_ParsingInQueues.java                                                   |    1 -
 ScalyrSite/test/logs/backend/UserActivityTest.java                                                                             |   84 +
 ScalyrSite/test/logs/backend/dashboards/DashboardConfigFileTest.java                                                           |   60 +-
 ScalyrSite/test/logs/backend/events/TaggedTest.java                                                                            |  143 ++
 ScalyrSite/test/logs/backend/events/TestsUsingTagged.java                                                                      |   83 +
 ScalyrSite/test/logs/backend/events/alerts/AlertConfigFileTest.java                                                            |  199 +-
 ScalyrSite/test/logs/backend/events/alerts/AlertTaskTest.java                                                                  |   67 +-
 ScalyrSite/test/logs/backend/events/alerts/MoreAlertMonitorThreadTest.java                                                     |    1 +
 ScalyrSite/test/logs/backend/events/archiver/S3ArchiveManagerTest.java                                                         |   18 +-
 ScalyrSite/test/logs/backend/events/data/DataTruncationThreadTest.java                                                         |    8 +-
 ScalyrSite/test/logs/backend/events/data/EpochIdTest.java                                                                      |   18 +-
 ScalyrSite/test/logs/backend/events/data/EpochLayerEventTest.java                                                              |  470 ++++-
 ScalyrSite/test/logs/backend/events/data/EventQueryTest.java                                                                   |    2 +-
 ScalyrSite/test/logs/backend/events/data/EventTest.java                                                                        |  180 +-
 ScalyrSite/test/logs/backend/events/data/LargeAttributeTest_ParsingInQueues.java                                               |    1 -
 ScalyrSite/test/logs/backend/events/data/MoreDataTruncationThreadTest.java                                                     |   49 +-
 ScalyrSite/test/logs/backend/events/data/NewEventTest.java                                                                     |  297 ++-
 ScalyrSite/test/logs/backend/events/data/NewEventTestBase.java                                                                 |  123 +-
 ScalyrSite/test/logs/backend/events/data/NewEventTest_ParsingInQueues.java                                                     |    1 -
 ScalyrSite/test/logs/backend/events/data/NewParsingTest.java                                                                   |   77 +-
 ScalyrSite/test/logs/backend/events/data/NewParsingTest_ParsingInQueues.java                                                   |    8 +-
 ScalyrSite/test/logs/backend/events/data/QueryResultTest.java                                                                  |    7 +-
 ScalyrSite/test/logs/backend/events/data/S3PerformanceBenchmark.java                                                           |    3 +-
 ScalyrSite/test/logs/backend/events/data/SlowEventTest.java                                                                    |    4 +-
 ScalyrSite/test/logs/backend/events/data/SubsamplingTest.java                                                                  |    6 +-
 ScalyrSite/test/logs/backend/events/db/AllTests.java                                                                           |    1 -
 ScalyrSite/test/logs/backend/events/db/DirectTimeseriesTest.java                                                               |    3 +-
 ScalyrSite/test/logs/backend/events/db/EpochListDbSchemaTest.java                                                              |   77 +-
 ScalyrSite/test/logs/backend/events/db/EpochManagerTest.java                                                                   |   11 +-
 ScalyrSite/test/logs/backend/events/db/EpochPurgerThreadTest.java                                                              |   12 +-
 ScalyrSite/test/logs/backend/events/db/EpochSeriesStateTest.java                                                               |    6 -
 ScalyrSite/test/logs/backend/events/db/EventImporterTest.java                                                                  |   26 +
 ScalyrSite/test/logs/backend/events/db/FreezerThreadTest.java                                                                  |   51 +
 ScalyrSite/test/logs/backend/events/db/GenericTimeseriesTest.java                                                              |    4 +
 ScalyrSite/test/logs/backend/events/db/IncrementalQueryTimeseriesTest.java                                                     |    2 +-
 ScalyrSite/test/logs/backend/events/db/K8sEventTest.java                                                                       |  266 +++
 ScalyrSite/test/logs/backend/events/db/MoreEventTest.java                                                                      |  348 +++-
 ScalyrSite/test/logs/backend/events/db/PreintersectionTest.java                                                                |  291 ++-
 ScalyrSite/test/logs/backend/events/db/SubAccountTest.java                                                                     |  264 ++-
 ScalyrSite/test/logs/backend/events/db/columns/ColumnDataTest.java                                                             |    2 +-
 ScalyrSite/test/logs/backend/events/db/columns/ColumnManagerTest.java                                                          |   47 +-
 ScalyrSite/test/logs/backend/events/db/columns/RawMemoryTest.java                                                              |    3 +
 ScalyrSite/test/logs/backend/events/db/columns/SharedColumnEpochDataThreadIdsTest.java                                         |   55 +-
 ScalyrSite/test/logs/backend/events/db/file/EpochFileKeyValueStoreTest.java                                                    |   38 +-
 ScalyrSite/test/logs/backend/events/db/file/EpochFileManagerTest.java                                                          |   95 +-
 ScalyrSite/test/logs/backend/events/db/file/EpochFileMetadataTest.java                                                         |   39 +-
 ScalyrSite/test/logs/backend/events/db/file/EpochFileOutputStreamTest.java                                                     |  164 +-
 ScalyrSite/test/logs/backend/events/db/file/EpochFileTest.java                                                                 |  238 ++-
 ScalyrSite/test/logs/backend/events/db/file/EpochFileTestBase.java                                                             |    9 +-
 ScalyrSite/test/logs/backend/events/db/file/EpochFileWriteReadTest.java                                                        |  194 +-
 ScalyrSite/test/logs/backend/events/reports/EstimateUniqueValuesTest.java                                                      |    3 +-
 ScalyrSite/test/logs/backend/events/reports/ReportTest.java                                                                    |   95 +-
 ScalyrSite/test/logs/backend/events/tsdb/SummaryStoreTest.java                                                                 |   25 +
 ScalyrSite/test/logs/backend/monitors/AbstractS3BucketMonitorTest.java                                                         |  211 +-
 ScalyrSite/test/logs/backend/monitors/CloudTrailMonitorTest.java                                                               |  206 +-
 ScalyrSite/test/logs/backend/monitors/CloudWatchMonitorTest.java                                                               |    5 +-
 ScalyrSite/test/logs/backend/monitors/HTTPMonitorTest.java                                                                     |    5 +-
 ScalyrSite/test/logs/backend/monitors/MonitorConfigFileTest.java                                                               |   15 +-
 ScalyrSite/test/logs/backend/monitors/RdsLogMonitorTest.java                                                                   |   27 +-
 ScalyrSite/test/logs/backend/monitors/S3BucketMonitorTest.java                                                                 |  304 ++-
 ScalyrSite/test/logs/backend/monitors/S3MessageProcessorTest.java                                                              |   51 +
 ScalyrSite/test/logs/frontend/DurableEventQueueTest.java                                                                       |  164 +-
 ScalyrSite/test/logs/parsing/AttributeAccumulatorTest.java                                                                     |   14 +-
 ScalyrSite/test/logs/parsing/LogAnnotator2Test.java                                                                            |   17 +-
 ScalyrSite/test/logs/parsing/LogParseUtilTest.java                                                                             |   37 +-
 ScalyrSite/test/web/scalyr/api/SessionInfoTest.java                                                                            |   23 +
 ScalyrSite/test/web/scalyr/api/db/DAOTest.java                                                                                 |   45 +
 ScalyrSite/test/web/scalyr/api/db/ScrubbingRuleDAOTest.java                                                                    |  116 ++
 ScalyrSite/test/web/scalyr/api/jdbi/JdbiConnectionWrapper.java                                                                 |   80 +
 ScalyrSite/test/web/scalyr/api/jdbi/JdbiResultSetWrapper.java                                                                  |  104 +
 ScalyrSite/test/web/scalyr/api/jersey/TestBinder.java                                                                          |   26 +
 ScalyrSite/test/web/scalyr/api/resources/ApiTest.java                                                                          |  185 ++
 ScalyrSite/test/web/scalyr/api/resources/ScrubbingRulesTest.java                                                               |   43 +
 ScalyrSite/test/web/scalyr/events/ui/DistributedQueryTest.java                                                                 |  347 +---
 ScalyrSite/test/web/scalyr/events/ui/UsagePlanStateTest.java                                                                   |   15 +-
 ScalyrSite/test/web/scalyr/ui/AuthUtilsTest.java                                                                               |   63 +
 ScalyrSite/test/web/scalyr/ui/EventViewWidgetTest.java                                                                         |   70 +
 ScalyrSite/test/web/scalyr/ui/LabsSettingTest.java                                                                             |  134 +-
 ScalyrSite/test/web/scalyr/ui/OverageNotificationSettingsTest.java                                                             |   46 +
 ScalyrSite/test/web/scalyr/ui/OverageNotificationThreadTest.java                                                               |  286 +++
 ScalyrSite/test/web/scalyr/ui/SelfServiceDemoTest.java                                                                         |    8 +-
 ScalyrSite/test/web/scalyr/ui/events/AlertEditorTest.java                                                                      |    2 -
 ScalyrSite/test/web/scalyr/ui/events/DashboardGraphsGeneratorTest.java                                                         |  141 ++
 ScalyrSite/test/web/scalyr/ui/events/EventRenderParamsTest.java                                                                |   30 +-
 ScalyrSite/test/web/scalyr/ui/events/GetLogEntriesHandlerTest.java                                                             |    5 +-
 ScalyrSite/test/web/scalyr/ui/events/GetSourcesAndLogsHandlerTest.java                                                         |  121 +-
 ScalyrSite/test/web/scalyr/ui/events/PhoenixGraphTest.java                                                                     |  164 +-
 ScalyrSite/test/web/scalyr/ui/events/QueryAnalysis.java                                                                        |    6 +-
 ScalyrSite/test/web/scalyr/ui/events/QueryUtilsTest.java                                                                       |   72 +-
 ScalyrSite/test/web/scalyr/ui/events/TimelinePlotTest.java                                                                     |   25 +-
 ScalyrSite/test/web/scalyr/ui/events/UIHelperTest.java                                                                         |   17 +-
 ScalyrSite/test/web/scalyr/ui/pagehandlers/AlertPageHandlerTest.java                                                           |  105 -
 ScalyrSite/test/web/scalyr/ui/pagehandlers/AlertsPageHandlerTest.java                                                          |  154 --
 ScalyrSite/test/web/scalyr/ui/pagehandlers/BaseDashboardPageHandlerTest.java                                                   |  107 ++
 ScalyrSite/test/web/scalyr/ui/pagehandlers/BillingPlanPageHandlerTest.java                                                     |    4 +
 ScalyrSite/test/web/scalyr/ui/pagehandlers/EventsPageFacetsModeHandlerTest.java                                                |    2 +-
 ScalyrSite/test/web/scalyr/ui/pagehandlers/EventsPageLogModeHandlerTest.java                                                   |   59 +-
 ScalyrSite/test/web/scalyr/ui/pagehandlers/NewDashboardPageHandlerTest.java                                                    |   94 +-
 ScalyrSite/test/web/scalyr/ui/pagehandlers/OldDashboardPageHandlerTest.java                                                    |   16 +-
 ScalyrSite/test/web/scalyr/ui/pagehandlers/PageHandlerRegistryTest.java                                                        |   10 +-
 ScalyrSite/test/web/scalyr/ui/pagehandlers/SearchGraphsPageHandlerTest.java                                                    |    4 +-
 ScalyrSite/test/web/scalyr/ui/pagehandlers/SearchLogsPageHandlerTest.java                                                      |   19 +-
 ScalyrSite/test/web/scalyr/ui/pagehandlers/VerifyEmailPageHandlerTest.java                                                     |  136 ++
 ScalyrSite/test/web/scalyr/ui/users/AcceptLinkInvitePostHandlerTest.java                                                       |    2 +-
 ScalyrSite/test/web/scalyr/ui/users/AddUsersHandlerTest.java                                                                   |   55 +-
 ScalyrSite/test/web/scalyr/ui/users/EditUserHandlerTest.java                                                                   |    4 +-
 ScalyrSite2/README.md                                                                                                          |    5 +
 ScalyrSite2/WebRoot/common/phoenixTemplate.jsp                                                                                 |  121 +-
 ScalyrSite2/WebRoot/common/prePhoenixTemplate.jsp                                                                              |    1 +
 ScalyrSite2/WebRoot/common/slangInnerTemplate.jsp                                                                              |    5 +
 ScalyrSite2/WebRoot/pages/scalyrSPA.jsp                                                                                        |   44 +-
 ScalyrSite2/WebRoot/pages/updateLabsPreferences.jsp                                                                            |    4 +-
 ScalyrSite2/WebRoot/src/img/chunked-search-page.png                                                                            |  Bin 0 -> 17211 bytes
 ScalyrSite2/WebRoot/src/img/chunkedDashboard.png                                                                               |  Bin 0 -> 36685 bytes
 ScalyrSite2/WebRoot/src/img/info.svg                                                                                           |   16 +
 ScalyrSite2/WebRoot/src/img/interactive-dashboard-sizing.png                                                                   |  Bin 0 -> 60138 bytes
 ScalyrSite2/WebRoot/src/img/post-to-slack.png                                                                                  |  Bin 29099 -> 42682 bytes
 ScalyrSite2/WebRoot/src/img/ranged-annotations.png                                                                             |  Bin 0 -> 96501 bytes
 ScalyrSite2/WebRoot/src/img/resize-icon.svg                                                                                    |   13 +
 ScalyrSite2/WebRoot/src/img/search-error.svg                                                                                   |   15 +
 ScalyrSite2/WebRoot/src/img/search-ghost.svg                                                                                   |   17 +
 ScalyrSite2/WebRoot/src/img/search-info.svg                                                                                    |   11 +
 ScalyrSite2/WebRoot/src/img/search-result-links.png                                                                            |  Bin 116176 -> 115879 bytes
 ScalyrSite2/WebRoot/src/img/search-warn.svg                                                                                    |   15 +
 ScalyrSite2/WebRoot/src/js/scalyr/controllers/slyNavHeaderController.js                                                        |   19 +-
 ScalyrSite2/WebRoot/src/js/scalyr/dialogs/addGraph/addGraphDialog.js                                                           |  174 +-
 ScalyrSite2/WebRoot/src/js/scalyr/dialogs/logLineDetailsDialog/logLineDetailsDialog.less                                       |    4 +-
 ScalyrSite2/WebRoot/src/js/scalyr/dialogs/logViewSettings/logViewSettingsDialog.html                                           |   13 -
 ScalyrSite2/WebRoot/src/js/scalyr/dialogs/logViewSettings/logViewSettingsDialog.js                                             |   14 +-
 ScalyrSite2/WebRoot/src/js/scalyr/dialogs/saveInDashboard/saveInDashboardDialog.html                                           |    2 +-
 ScalyrSite2/WebRoot/src/js/scalyr/dialogs/saveInDashboard/saveInDashboardDialog.js                                             |   75 +-
 ScalyrSite2/WebRoot/src/js/scalyr/dialogs/traceDetails/traceDetailsDialog.html                                                 |   10 +-
 ScalyrSite2/WebRoot/src/js/scalyr/dialogs/traceDetails/traceDetailsDialog.js                                                   |  108 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyButter/slyButter.js                                                            |   11 +
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyDashboard/slyDashboard.html                                                    |   15 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyDashboard/slyDashboard.js                                                      |  432 ++++-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyDashboard/slyDashboard.less                                                    |   38 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyDashboardError/slyDashboardError.html                                          |   12 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyDashboardError/slyDashboardError.js                                            |    2 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyDashboardError/slyDashboardError.less                                          |    6 +
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyDashboardGraphHeader/slyDashboardGraphHeader.less                              |    7 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyEventsGraphLegend/slyEventsGraphLegend.html                                    |   44 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyEventsGraphLegend/slyEventsGraphLegend.js                                      |   16 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyEventsGraphLegend/slyEventsGraphLegend.less                                    |   13 +
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyEventsGraphToolbar/slyEventsGraphToolbar.html                                  |   74 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyEventsGraphToolbar/slyEventsGraphToolbar.js                                    |   23 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyFilterByValueWidget/slyFilterByValueWidget.js                                  |  277 ++-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyGraphChartTypeMenu/slyGraphChartTypeMenu.js                                    |    4 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyGraphChartTypeMenu/slyGraphChartTypeMenu.less                                  |    2 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLoadingIndicator/slyLoadingIndicator.js                                        |   83 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogLinePopover/slyLogLinePopover.html                                          |    6 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogLinePopover/slyLogLinePopover.js                                            |   64 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogLinesContainer/slyLogLinesContainer.html                                    |   31 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogLinesContainer/slyLogLinesContainer.js                                      |  315 ++-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogLinesContainer/slyLogLinesContainer.less                                    |   45 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogScrubbing/slyLogScrubbing.html                                              |    3 +
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogScrubbing/slyLogScrubbing.js                                                |   27 +
 ScalyrSite2/WebRoot/src/js/scalyr/directives/{slyTokenizedSearch/chicletTemplate.less => slyLogScrubbing/slyLogScrubbing.less} |    0
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogSearchToolbar/slyLogSearchToolbar.html                                      |    2 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogSearchToolbar/slyLogSearchToolbar.js                                        |   11 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyNewGraph/slyNewGraph.html                                                      |    2 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyNewGraph/slyNewGraph.js                                                        |   32 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyNewGraph/slyNewGraph.less                                                      |    2 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyScalyrGraph/slyScalyrGraph.html                                                |   15 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyScalyrGraph/slyScalyrGraph.js                                                  |  559 +++++-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyScalyrGraph/slyScalyrGraph.less                                                |   18 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyScalyrReport/slyScalyrReport.html                                              |   11 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyScalyrReport/slyScalyrReport.less                                              |    4 +
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slySearchBox/slySearchBox.html                                                    |   11 -
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slySearchBox/slySearchBox.js                                                      |  163 --
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slySearchBox/slySearchBox.less                                                    |   23 -
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slySearchBoxColors/slySearchBoxColors.html                                        |    7 -
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slySearchBoxColors/slySearchBoxColors.js                                          |  103 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slySearchBoxColors/slySearchBoxColors.less                                        |   22 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slySourceLogSelector/slySourceLogSelector.js                                      |  164 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTimeMenu/slyTimeMenu.html                                                      |    4 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTimeMenu/slyTimeMenu.js                                                        |    8 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTimeMenu/slyTimeMenuEmbedded.html                                              |    4 +-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTimeline/slyTimeline.js                                                        |  352 +++-
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTokenizedSearch/chicletTemplate.html                                           |   35 -
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTokenizedSearch/slyTokenizedSearch.html                                        |   38 -
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTokenizedSearch/slyTokenizedSearch.js                                          |  390 ----
 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTokenizedSearch/slyTokenizedSearch.less                                        |  293 ---
 ScalyrSite2/WebRoot/src/js/scalyr/lib/autoUpdateQueries.js                                                                     |  159 +-
 ScalyrSite2/WebRoot/src/js/scalyr/lib/constants.js                                                                             |   63 +
 ScalyrSite2/WebRoot/src/js/scalyr/lib/eventsUrlCreator.js                                                                      |   85 +-
 ScalyrSite2/WebRoot/src/js/scalyr/lib/graphs.js                                                                                |  204 +-
 ScalyrSite2/WebRoot/src/js/scalyr/lib/reports.js                                                                               |   18 +-
 ScalyrSite2/WebRoot/src/js/scalyr/lib/slyBasePageControllers.js                                                                |  151 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/alert/alertPage.html                                                                   |    2 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/alert/alertPage.js                                                                     |   16 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/alertDetails/alertDetails.html                                                         |  170 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/alertDetails/alertDetails.js                                                           |    2 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/alertDetails/alertDetails.less                                                         |  112 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/alerts/alertsPage.html                                                                 |    5 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/alerts/alertsPage.js                                                                   |   12 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/apiKeys/apiKeysPage.html                                                               |  222 +--
 ScalyrSite2/WebRoot/src/js/scalyr/pages/apiKeys/apiKeysPage.less                                                               |  178 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/billingPlan/billingPlanPage.html                                                       |  404 ++--
 ScalyrSite2/WebRoot/src/js/scalyr/pages/billingPlan/billingPlanPage.js                                                         |   52 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/billingPlan/billingPlanPage.less                                                       |   44 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/bulkExports/bulkExportsPage.html                                                       |  238 +--
 ScalyrSite2/WebRoot/src/js/scalyr/pages/bulkExports/bulkExportsPage.less                                                       |   10 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/dashboard/dashboardPage.js                                                             |   28 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/distribution/distributionPage.html                                                     |   16 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/distribution/distributionPage.js                                                       |    3 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/labs/labsPage.html                                                                     |   23 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/labs/labsPage.js                                                                       |   72 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/labs/labsPage.less                                                                     |   20 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/linkTeamAccount/linkTeamAccountPage.html                                               |    4 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/linkTeamAccount/linkTeamAccountPage.less                                               |   47 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/logOverview/logOverviewPage.html                                                       |  395 ++--
 ScalyrSite2/WebRoot/src/js/scalyr/pages/logOverview/logOverviewPage.js                                                         |  136 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/logOverview/logOverviewPage.less                                                       |   18 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/logProcessing/logProcessingPage.html                                                   |   29 +
 ScalyrSite2/WebRoot/src/js/scalyr/pages/logProcessing/logProcessingPage.js                                                     |   68 +
 ScalyrSite2/WebRoot/src/js/scalyr/pages/logProcessing/logProcessingPage.less                                                   |   25 +
 ScalyrSite2/WebRoot/src/js/scalyr/pages/login/login.html                                                                       |   59 +
 ScalyrSite2/WebRoot/src/js/scalyr/pages/login/login.js                                                                         |  129 ++
 ScalyrSite2/WebRoot/src/js/scalyr/pages/login/login.less                                                                       |  183 ++
 ScalyrSite2/WebRoot/src/js/scalyr/pages/multiStepQuery/multiStepQueryPage.html                                                 |  147 ++
 ScalyrSite2/WebRoot/src/js/scalyr/pages/multiStepQuery/multiStepQueryPage.js                                                   |  390 ++++
 ScalyrSite2/WebRoot/src/js/scalyr/pages/multiStepQuery/multiStepQueryPage.less                                                 |  228 +++
 ScalyrSite2/WebRoot/src/js/scalyr/pages/parsers/parsersPage.html                                                               |  132 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/parsers/parsersPage.less                                                               |   85 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/searchGraph/searchGraphPage.html                                                       |  199 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/searchGraph/searchGraphPage.js                                                         |  150 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/searchGraph/searchGraphPage.less                                                       |    5 +
 ScalyrSite2/WebRoot/src/js/scalyr/pages/searchLogs/searchLogsPage.html                                                         |   28 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/searchLogs/searchLogsPage.js                                                           |   57 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/searchLogs/searchLogsPage.less                                                         |    8 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/tabbedAlerts/tabbedAlertsPage.html                                                     |  150 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/tabbedAlerts/tabbedAlertsPage.js                                                       |    4 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/tabbedAlerts/tabbedAlertsPage.less                                                     |  193 +-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/userAccounts/userAccountsPage.html                                                     |  262 ++-
 ScalyrSite2/WebRoot/src/js/scalyr/pages/userAccounts/userAccountsPage.less                                                     |    7 -
 ScalyrSite2/WebRoot/src/js/scalyr/pages/verifyEmail/verifyEmailPage.html                                                       |    9 +
 ScalyrSite2/WebRoot/src/js/scalyr/pages/verifyEmail/verifyEmailPage.js                                                         |   81 +
 ScalyrSite2/WebRoot/src/js/scalyr/pages/verifyEmail/verifyEmailPage.less                                                       |   11 +
 ScalyrSite2/WebRoot/src/js/scalyr/partials/errorPage/errors.html                                                               |    5 +-
 ScalyrSite2/WebRoot/src/js/scalyr/partials/errorPage/errors.less                                                               |   21 +-
 ScalyrSite2/WebRoot/src/js/scalyr/scalyrSiteAppNewUI.js                                                                        |    4 -
 ScalyrSite2/WebRoot/src/js/scalyr/services/chunkedDashboardRequestService.js                                                   |  315 +++
 ScalyrSite2/WebRoot/src/js/scalyr/services/dashboardsService.js                                                                |  155 ++
 ScalyrSite2/WebRoot/src/js/scalyr/services/graphChunkService.js                                                                |  444 +++++
 ScalyrSite2/WebRoot/src/js/scalyr/services/pageRequestService.js                                                               |  535 ++++++
 ScalyrSite2/WebRoot/src/js/scalyr/services/performanceReporter.js                                                              |  228 +++
 ScalyrSite2/WebRoot/src/js/scalyr/services/preferenceService.js                                                                |   12 -
 ScalyrSite2/WebRoot/src/js/scalyr/services/queryLanguageParsingService.js                                                      |   36 -
 ScalyrSite2/WebRoot/src/js/scalyr/services/queryService.js                                                                     |    2 +
 ScalyrSite2/WebRoot/src/js/scalyr/services/regexService.js                                                                     |   23 +
 ScalyrSite2/WebRoot/src/js/scalyr/services/scalyrBackend.js                                                                    |   95 +-
 ScalyrSite2/WebRoot/src/js/slang/controllers/slgPageLoader.js                                                                  |  320 +---
 ScalyrSite2/WebRoot/src/js/slang/core6.ts                                                                                      |   27 +-
 ScalyrSite2/WebRoot/src/js/slang/dependencies.json.js.header                                                                   |    4 +-
 ScalyrSite2/WebRoot/src/js/slang/lib/newUIDateUtil.ts                                                                          |  295 ++-
 ScalyrSite2/WebRoot/src/js/slang/lib/newUIUtil.ts                                                                              |  254 ++-
 ScalyrSite2/WebRoot/src/js/slang/lib/omega.ts                                                                                  |    4 +
 ScalyrSite2/WebRoot/src/js/slang/scalyrClientLogger.js                                                                         |   55 +-
 ScalyrSite2/WebRoot/src/js/thirdparty/moment-round/moment-round.js                                                             |   78 +
 ScalyrSite2/WebRoot/src/js/thirdparty/ui-scroll/ui-scroll-custom.js                                                            |    8 +-
 ScalyrSite2/WebRoot/src/jstests/scalyr/directives/slySourceLogSelectorTest.js                                                  |   28 +-
 ScalyrSite2/WebRoot/src/jstests/scalyr/lib/autoUpdateQueriesTest.js                                                            |   48 +-
 ScalyrSite2/WebRoot/src/jstests/scalyr/lib/eventsUrlCreatorTest.js                                                             |   18 +-
 ScalyrSite2/WebRoot/src/jstests/scalyr/lib/graphsTest.js                                                                       |    2 +
 ScalyrSite2/WebRoot/src/jstests/scalyr/services/regexServiceTest.js                                                            |   54 +
 ScalyrSite2/WebRoot/src/jstests/scalyr/services/scalyrBackendTest.js                                                           |   11 +
 ScalyrSite2/WebRoot/src/jstests/slang/coreTest.js                                                                              |    3 +-
 ScalyrSite2/WebRoot/src/jstests/slang/lib/newUIDateUtilTest.js                                                                 |  269 ++-
 ScalyrSite2/WebRoot/src/jstests/slang/lib/newUIUtilTest.js                                                                     |   16 +-
 ScalyrSite2/WebRoot/src/styles/colors.less                                                                                     |    2 +
 ScalyrSite2/WebRoot/src/styles/defines.less                                                                                    |   13 +-
 ScalyrSite2/WebRoot/src/styles/docs.less                                                                                       |   31 +
 ScalyrSite2/WebRoot/src/styles/events.less                                                                                     |    3 -
 ScalyrSite2/WebRoot/src/styles/global.less                                                                                     |   77 +-
 ScalyrSite2/WebRoot/src/styles/navbar.less                                                                                     |   60 +-
 ScalyrSite2/docker-compose.yml                                                                                                 |   26 +
 ScalyrSite2/gulpfile.babel.js                                                                                                  |   31 +-
 ScalyrSite2/karma.conf.js                                                                                                      |    3 +
 ScalyrSite2/nginx.conf                                                                                                         |   24 +
 ScalyrSite2/package-lock.json                                                                                                  |  134 +-
 ScalyrSite2/package.json                                                                                                       |    3 +-
 annotations/Dockerfile                                                                                                         |    5 +
 annotations/config/annotations_prod                                                                                            |    6 +
 annotations/config/annotations_prodeu                                                                                          |    6 +
 annotations/config/annotations_staging                                                                                         |    5 +
 annotations/pom.xml                                                                                                            |   16 +-
 annotations/src/main/java/com/scalyr/annotations/AnnotationsApplication.java                                                   |   11 +
 annotations/src/main/java/com/scalyr/annotations/AnnotationsConfiguration.java                                                 |   19 +-
 annotations/src/main/java/com/scalyr/annotations/AuthenticationFilter.java                                                     |   58 +
 annotations/src/main/java/com/scalyr/annotations/ScalyrConfiguration.java                                                      |  154 ++
 annotations/src/main/java/com/scalyr/annotations/db/AnnotationsDAO.java                                                        |   26 +-
 annotations/src/main/java/com/scalyr/annotations/db/LabelsDAO.java                                                             |   15 +-
 annotations/src/main/java/com/scalyr/annotations/entities/DbAnnotation.java                                                    |   20 +-
 annotations/src/main/java/com/scalyr/annotations/entities/DbLabel.java                                                         |   15 +-
 annotations/src/main/java/com/scalyr/annotations/filter/AnnotationsFilter.java                                                 |   12 +-
 annotations/src/main/java/com/scalyr/annotations/resources/AnnotationsResource.java                                            |    8 +-
 annotations/src/main/java/com/scalyr/annotations/utils/JsonUtils.java                                                          |   58 +
 annotations/src/main/resources/annotations.sql                                                                                 |    3 +-
 annotations/src/main/resources/annotations.yml                                                                                 |    7 +-
 annotations/src/main/resources/dev.yml                                                                                         |   10 +-
 annotations/src/test/com/scalyr/annotations/db/AnnotationsDAOTest.java                                                         |   18 +
 annotations/src/test/com/scalyr/annotations/resources/AnnotationsResourceTest.java                                             |   21 +-
 config/anpatel                                                                                                                 |   17 +-
 config/conrad                                                                                                                  |    9 +-
 config/czerwin                                                                                                                 |    2 +
 config/dev                                                                                                                     |    4 +-
 config/guranjan                                                                                                                |    6 +-
 config/kitchiong                                                                                                               |  186 --
 config/seangarner                                                                                                              |  175 --
 config/snewman                                                                                                                 |  407 ----
 config/tracyburge                                                                                                              |    8 +-
 docker/nginx/.gitignore                                                                                                        |    1 +
 docker/nginx/Dockerfile                                                                                                        |   13 +
 docker/nginx/SSL/localhost.crt                                                                                                 |   22 +
 docker/nginx/SSL/localhost.key                                                                                                 |   28 +
 docker/nginx/cert.conf                                                                                                         |   31 +
 docker/nginx/conf.d/common.conf                                                                                                |   20 +
 docker/nginx/conf.d/localhost.conf                                                                                             |  191 ++
 docker/nginx/conf.d/localhost.template                                                                                         |  195 ++
 docker/nginx/conf.d/ssl.conf                                                                                                   |    8 +
 docker/nginx/docker-compose.yml                                                                                                |   26 +
 docker/nginx/nginx.conf                                                                                                        |   24 +
 docker/nginx/pom.xml                                                                                                           |   47 +
 pom.xml                                                                                                                        |   32 +-
 scripts/addSlave.py                                                                                                            |   60 +-
 scripts/ansible/action_plugins/poll_until_healthcheck_ok.py                                                                    |   10 +-
 scripts/ansible/clean_failover.yml                                                                                             |   31 +-
 scripts/ansible/cleanish_failover.yml                                                                                          |   50 +-
 scripts/ansible/cleanish_failover_2.yml                                                                                        |   23 +
 scripts/ansible/initialize_local_replica.yml                                                                                   |   28 +
 scripts/ansible/inventory/ec2-s3-eu.py                                                                                         |   12 +
 scripts/ansible/inventory/ec2-s3-us.py                                                                                         |   12 +
 scripts/ansible/inventory/eks                                                                                                  |   18 +
 scripts/ansible/inventory/group_vars/all                                                                                       |    5 +-
 scripts/ansible/inventory/group_vars/eu_ipa                                                                                    |    3 +
 scripts/ansible/inventory/group_vars/infra_ipa                                                                                 |    4 +
 scripts/ansible/inventory/group_vars/ipa                                                                                       |    4 +
 scripts/ansible/inventory/group_vars/prod                                                                                      |   16 +-
 scripts/ansible/inventory/group_vars/prod-front                                                                                |    2 +
 scripts/ansible/inventory/group_vars/prod-frontends                                                                            |    2 +-
 scripts/ansible/inventory/group_vars/prod-log                                                                                  |    2 +
 scripts/ansible/inventory/group_vars/prod-log-ebs-replicas                                                                     |    2 +
 scripts/ansible/inventory/group_vars/prod-queue                                                                                |    2 +
 scripts/ansible/inventory/group_vars/prod-solomo                                                                               |    6 +
 scripts/ansible/inventory/group_vars/prod-worker                                                                               |    2 +
 scripts/ansible/inventory/group_vars/prod-zk                                                                                   |    2 +-
 scripts/ansible/inventory/group_vars/prodeu                                                                                    |   12 +-
 scripts/ansible/inventory/group_vars/prodeu-front                                                                              |    2 +
 scripts/ansible/inventory/group_vars/prodeu-frontends                                                                          |    2 +-
 scripts/ansible/inventory/group_vars/prodeu-log                                                                                |    2 +
 scripts/ansible/inventory/group_vars/prodeu-log-ebs-replicas                                                                   |    2 +
 scripts/ansible/inventory/group_vars/prodeu-queue                                                                              |    2 +
 scripts/ansible/inventory/group_vars/prodeu-worker                                                                             |    2 +
 scripts/ansible/inventory/group_vars/qatesting                                                                                 |   14 +-
 scripts/ansible/inventory/group_vars/qatesting-front                                                                           |    2 +
 scripts/ansible/inventory/group_vars/qatesting-log                                                                             |    2 +
 scripts/ansible/inventory/group_vars/qatesting-queue                                                                           |    2 +
 scripts/ansible/inventory/group_vars/staging                                                                                   |   16 +-
 scripts/ansible/inventory/group_vars/staging-front                                                                             |    2 +
 scripts/ansible/inventory/group_vars/staging-log                                                                               |    2 +
 scripts/ansible/inventory/group_vars/staging-log-new                                                                           |    1 +
 scripts/ansible/inventory/group_vars/staging-queue                                                                             |    2 +
 scripts/ansible/inventory/group_vars/staging-worker                                                                            |    2 +
 scripts/ansible/inventory/group_vars/stagingeu                                                                                 |   12 +-
 scripts/ansible/inventory/group_vars/stagingeu-front                                                                           |    2 +
 scripts/ansible/inventory/group_vars/stagingeu-log                                                                             |    2 +
 scripts/ansible/inventory/group_vars/stagingeu-queue                                                                           |    2 +
 scripts/ansible/inventory/group_vars/stagingeu-worker                                                                          |    3 +
 scripts/ansible/inventory/group_vars/us_ipa                                                                                    |    3 +
 scripts/ansible/inventory/host_vars/common-ipa-1                                                                               |    2 +
 scripts/ansible/inventory/host_vars/common-ipa-2                                                                               |    2 +
 scripts/ansible/inventory/host_vars/common-ipa-3                                                                               |    2 +
 scripts/ansible/inventory/host_vars/commoneu-ipa-1                                                                             |    2 +
 scripts/ansible/inventory/host_vars/commoneu-ipa-2                                                                             |    2 +
 scripts/ansible/inventory/host_vars/commoneu-ipa-3                                                                             |    2 +
 scripts/ansible/inventory/host_vars/infra-ipa-1                                                                                |    2 +
 scripts/ansible/inventory/host_vars/infra-ipa-2                                                                                |    2 +
 scripts/ansible/inventory/host_vars/newinfra-ipa-2                                                                             |    2 +
 scripts/ansible/inventory/host_vars/prod-ipa-1                                                                                 |    2 +
 scripts/ansible/inventory/host_vars/prod-ipa-2                                                                                 |    2 +
 scripts/ansible/inventory/host_vars/prod-ipa-3                                                                                 |    2 +
 scripts/ansible/inventory/host_vars/prod-vpn-1                                                                                 |    2 +
 scripts/ansible/inventory/host_vars/prod-vpn-2                                                                                 |    2 +
 scripts/ansible/inventory/host_vars/prodeu-ipa-1                                                                               |    2 +
 scripts/ansible/inventory/host_vars/prodeu-ipa-2                                                                               |    2 +
 scripts/ansible/inventory/host_vars/prodeu-ipa-3                                                                               |    2 +
 scripts/ansible/inventory/host_vars/staging-ipa-1                                                                              |    2 +
 scripts/ansible/inventory/host_vars/staging-ipa-2                                                                              |    2 +
 scripts/ansible/inventory/host_vars/staging-ipa-3                                                                              |    2 +
 scripts/ansible/inventory/host_vars/stagingeu-ipa-1                                                                            |    2 +
 scripts/ansible/inventory/host_vars/stagingeu-ipa-2                                                                            |    2 +
 scripts/ansible/inventory/ipa                                                                                                  |   38 +-
 scripts/ansible/inventory/jenkins                                                                                              |   17 +
 scripts/ansible/inventory/local                                                                                                |    2 +-
 scripts/ansible/inventory/prod                                                                                                 | 1332 +------------
 scripts/ansible/inventory/prodeu                                                                                               |  901 +--------
 scripts/ansible/inventory/qatesting                                                                                            |  182 +-
 scripts/ansible/inventory/staging                                                                                              |  446 +----
 scripts/ansible/inventory/stagingeu                                                                                            |  253 +--
 scripts/ansible/inventory/vpn                                                                                                  |   21 +
 scripts/ansible/library/common/backdoor.py                                                                                     |    4 +-
 scripts/ansible/library/verify_json.py                                                                                         |    2 +-
 scripts/ansible/prod_push.yml                                                                                                  |   10 +-
 scripts/ansible/prod_push_masters.yml                                                                                          |   34 +-
 scripts/ansible/resize_log_instance.yml                                                                                        |  162 ++
 scripts/ansible/restart_instance.yml                                                                                           |  241 +--
 scripts/ansible/roles/common/tasks/ecpush.yml                                                                                  |    4 +-
 scripts/ansible/roles/manage_ec2_tags/tasks/main.yml                                                                           |   42 +
 scripts/ansible/roles/setup/defaults/main.yml                                                                                  | 7642 ++++++++++++++++++++++++++++++++++++-------------------------------------
 scripts/ansible/roles/setup/tasks/main.yml                                                                                     |   11 +
 scripts/ansible/roles/setup/templates/etc_scalyr-agent-2_agent.json.j2                                                         |    2 +-
 scripts/createInstance.py                                                                                                      |    6 +-
 scripts/ecpushbackdoor                                                                                                         |    8 +-
 scripts/infra/ec2events/ec2events.py                                                                                           |    2 +-
 scripts/infra/jenkins/build-and-run.sh                                                                                         |    2 +-
 scripts/remote/setup                                                                                                           |    1 +
 scripts/scalyr-ops                                                                                                             |  166 +-
 scripts/scalyr.py                                                                                                              |   14 +-
 1100 files changed, 71796 insertions(+), 34799 deletions(-)
 create mode 100644 Jenkinsfile-deploy-docs
 create mode 100644 ScalyrAgent/monitor_docs/kubernetes_events_monitor.md
 create mode 100644 ScalyrSite/WebContent/WEB-INF/dashboards/k8s Events.js
 create mode 100644 ScalyrSite/WebContent/WEB-INF/parsers/k8sEvents.js
 delete mode 100644 ScalyrSite/WebContent/common/pages/404.jsp
 delete mode 100644 ScalyrSite/WebContent/common/pages/verifyEmail.jsp
 delete mode 100644 ScalyrSite/WebContent/docs/helpLogReference.md
 create mode 100644 ScalyrSite/WebContent/docs/helpPowerQueries.md
 delete mode 100644 ScalyrSite/WebContent/docs/solutions/slnHipChat.md
 create mode 100644 ScalyrSite/WebContent/images/error-404.svg
 create mode 100644 ScalyrSite/WebContent/images/error-503.svg
 create mode 100644 ScalyrSite/WebContent/images/error-50x.svg
 delete mode 100644 ScalyrSite/WebContent/internal/computedGraph.jsp
 delete mode 100644 ScalyrSite/WebContent/internal/configTestDash.jsp
 delete mode 100644 ScalyrSite/WebContent/internal/internalApiMon.jsp
 delete mode 100644 ScalyrSite/WebContent/internal/iobench.jsp.hide
 create mode 100644 ScalyrSite/WebContent/internal/status.jsp
 delete mode 100644 ScalyrSite/WebContent/internal/zkMonitoring.jsp
 delete mode 100644 ScalyrSite/WebContent/internal/zkServerMonitoring.jsp
 create mode 100644 ScalyrSite/src/com/scalyr/collections/AbstractIntToIntHashMap.java
 create mode 100644 ScalyrSite/src/com/scalyr/collections/ByteArrayToIntMap.java
 create mode 100644 ScalyrSite/src/com/scalyr/collections/GarbageCollectableArena.java
 create mode 100644 ScalyrSite/src/com/scalyr/collections/README.md
 create mode 100644 ScalyrSite/src/com/scalyr/config/OpenCensus.java
 delete mode 100644 ScalyrSite/src/com/scalyr/config/RestrictedAction.java
 create mode 100644 ScalyrSite/src/com/scalyr/config/api/GetTeamTokenApiHandler.java
 create mode 100644 ScalyrSite/src/com/scalyr/config/api/scim/ScimApiServlet.java
 create mode 100644 ScalyrSite/src/com/scalyr/config/api/scim/ScimConverters.java
 create mode 100644 ScalyrSite/src/com/scalyr/config/api/scim/ScimGetOrUpdateUserByEmailApiHandler.java
 create mode 100644 ScalyrSite/src/com/scalyr/config/api/scim/ScimListOrCreateUserApiHandler.java
 create mode 100644 ScalyrSite/src/com/scalyr/config/api/scim/ScimUserAccountLinker.java
 create mode 100644 ScalyrSite/src/com/scalyr/config/api/scim/ScimUserManagement.java
 delete mode 100644 ScalyrSite/src/com/scalyr/core/ByteVector.java
 delete mode 100644 ScalyrSite/src/com/scalyr/core/F2.java
 create mode 100644 ScalyrSite/src/com/scalyr/core/KeyedKnobDouble.java
 create mode 100644 ScalyrSite/src/com/scalyr/core/LongRanges.java
 create mode 100644 ScalyrSite/src/com/scalyr/core/SuccessGauge.java
 create mode 100644 ScalyrSite/src/com/scalyr/grpc/LegacyNodeClient.java
 create mode 100644 ScalyrSite/src/com/scalyr/grpc/OpenCensusInterceptor.java
 delete mode 100644 ScalyrSite/src/com/scalyr/images/ColorConversion.java
 delete mode 100644 ScalyrSite/src/com/scalyr/images/PhotoInfo.java
 delete mode 100644 ScalyrSite/src/com/scalyr/images/Point.java
 delete mode 100644 ScalyrSite/src/com/scalyr/images/PointD.java
 delete mode 100644 ScalyrSite/src/com/scalyr/images/RectD.java
 delete mode 100644 ScalyrSite/src/com/scalyr/images/Transform.java
 create mode 100644 ScalyrSite/src/com/scalyr/io/RandomAccessFileWithPath.java
 create mode 100644 ScalyrSite/src/com/scalyr/io/ScalyrCipherInputStream.java
 create mode 100644 ScalyrSite/src/com/scalyr/json/JsonSerializer.java
 delete mode 100644 ScalyrSite/src/com/scalyr/metrics/DiskSampler.java
 delete mode 100644 ScalyrSite/src/com/scalyr/metrics/EventGraphEmitter.java
 delete mode 100644 ScalyrSite/src/com/scalyr/metrics/GraphEmitter.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/GroupingTable.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/GroupingTableRowKey.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/GroupingTableRowMap.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/Knobs.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/MemoryManipulation.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/README.md
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnAny.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnEstimateDistinct.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnFirst.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnLast.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnOldestNewest.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnPercentile.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnSingleton.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ColumnStdDev.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/GroupingTableColumn.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/SimpleNumericColumns.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/columns/ValueStoringColumn.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/CodeGenerator.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/ComplexQueryCompiler.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/ComplexQueryParser.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/ExpressionNode.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/GroupingPhaseSpecification.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/QueryCommand.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/QueryExecutionStage.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/compiler/README.md
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/execution/ComplexQueryEngine.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/execution/ComplexQueryResult.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/execution/ComplexQueryResultAspect.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/execution/ComplexQueryResultAspectSpec.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/execution/ComplexQueryUIGlue.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/execution/UserDefinedLookupTable.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/LookupEngine.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/LookupFunctions.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/MiscellaneousFunctions.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/NumericConversions.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/NumericFunctions.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/OnTheFlyParser.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/ParsingFunctions.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/QueryExecutionStep.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/README.md
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/StepFactory.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/StepFactoryUtilities.java
 create mode 100644 ScalyrSite/src/com/scalyr/queryexec/complex/functions/StringFunctions.java
 create mode 100644 ScalyrSite/src/com/scalyr/server/ServerStatus.java
 create mode 100644 ScalyrSite/src/com/scalyr/tasks/AlertNotificationChannel.java
 create mode 100644 ScalyrSite/src/com/scalyr/tasks/AlertNotificationParameters.java
 delete mode 100644 ScalyrSite/src/com/scalyr/tasks/HipChatApiTask.java
 delete mode 100644 ScalyrSite/src/com/scalyr/tasks/HipChatV2ApiTask.java
 create mode 100755 ScalyrSite/src/com/scalyr/thirdparty/org/jnumbers/NumberParser.java
 create mode 100644 ScalyrSite/src/logs/api/ComplexQueryApiHandler.java
 create mode 100644 ScalyrSite/src/logs/backend/K8sController.java
 delete mode 100644 ScalyrSite/src/logs/backend/K8sDeployment.java
 create mode 100644 ScalyrSite/src/logs/backend/K8sKind.java
 create mode 100644 ScalyrSite/src/logs/backend/UserActivity.java
 create mode 100644 ScalyrSite/src/logs/backend/events/Tagged.java
 create mode 100644 ScalyrSite/src/logs/backend/events/alerts/AlertLogLineFetcher.java
 create mode 100644 ScalyrSite/src/logs/backend/events/alerts/AlertNotificationFormatting.java
 create mode 100644 ScalyrSite/src/logs/backend/events/data/AttributeListResult.java
 create mode 100644 ScalyrSite/src/logs/backend/events/data/AttributeListSpec.java
 create mode 100644 ScalyrSite/src/logs/backend/events/db/FrozenEpochCatchupThread.java
 delete mode 100644 ScalyrSite/src/logs/backend/events/db/ServerInfoManager.java
 create mode 100644 ScalyrSite/src/logs/backend/events/db/epochs/AbstractEpoch.java
 create mode 100644 ScalyrSite/src/logs/backend/events/db/epochs/EpochIterator.java
 create mode 100644 ScalyrSite/src/logs/backend/events/db/epochs/EpochRange.java
 create mode 100644 ScalyrSite/src/logs/backend/events/db/epochs/MergingIterator.java
 create mode 100644 ScalyrSite/src/logs/backend/events/db/epochs/SingleEpochIterator.java
 delete mode 100644 ScalyrSite/src/logs/backend/monitors/AbstractS3BucketMonitor.java
 delete mode 100644 ScalyrSite/src/logs/backend/monitors/CloudTrailMonitor.java
 create mode 100644 ScalyrSite/src/logs/backend/monitors/S3BucketMonitorLogging.java
 create mode 100644 ScalyrSite/src/logs/backend/monitors/S3BucketMonitorTuning.java
 create mode 100644 ScalyrSite/src/logs/backend/monitors/S3ImportEventInserter.java
 create mode 100644 ScalyrSite/src/logs/backend/monitors/S3ImportReadme.md
 create mode 100644 ScalyrSite/src/logs/backend/monitors/S3ImportUtilities.java
 create mode 100644 ScalyrSite/src/logs/backend/monitors/S3Importer.java
 create mode 100644 ScalyrSite/src/logs/backend/monitors/S3MessageProcessor.java
 create mode 100644 ScalyrSite/src/logs/backend/monitors/StatisticsMap.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/ArgFlag.java
 delete mode 100755 ScalyrSite/src/org/fusesource/hawtjni/runtime/Callback.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/ClassFlag.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/FieldFlag.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/JNIEnv.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/JniArg.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/JniClass.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/JniField.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/JniMethod.java
 delete mode 100755 ScalyrSite/src/org/fusesource/hawtjni/runtime/Library.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/MethodFlag.java
 delete mode 100755 ScalyrSite/src/org/fusesource/hawtjni/runtime/NativeStats.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/PointerMath.java
 delete mode 100644 ScalyrSite/src/org/fusesource/hawtjni/runtime/T32.java
 create mode 100644 ScalyrSite/src/resources/db/migration/README.md
 create mode 100644 ScalyrSite/src/resources/db/migration/V001__Baseline.sql
 create mode 100644 ScalyrSite/src/resources/db/migration/V002__Create_redaction_rules_table.sql
 create mode 100644 ScalyrSite/src/web/scalyr/api/ApiError.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/ApiException.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/ValidationDetails.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/db/ScrubbingRuleDAO.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/db/SessionDAO.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/db/UserDAO.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/db/models/ScrubbingRule.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/db/models/SessionDateTime.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/db/models/SessionInfo.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/db/models/SessionRecord.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/db/models/UserRecord.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/jersey/ApiApplication.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/jersey/ApiExceptionHandler.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/jersey/ApiPrincipal.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/jersey/ApiSecurityContext.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/jersey/ApplicationBinder.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/jersey/AuthenticationFilter.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/jersey/IsoDateTimeDeserializer.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/jersey/NotFoundExceptionHandler.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/jersey/ObjectMapperProvider.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/resources/Demo.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/resources/ScrubbingRules.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/services/AuthService.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/services/DBService.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/services/GlobalService.java
 create mode 100644 ScalyrSite/src/web/scalyr/api/services/JdbiDBService.java
 create mode 100644 ScalyrSite/src/web/scalyr/data/sql/SqlSchema.java
 delete mode 100644 ScalyrSite/src/web/scalyr/events/ui/AppUI.java
 delete mode 100644 ScalyrSite/src/web/scalyr/mail/RedirectingServletResponse.java
 delete mode 100644 ScalyrSite/src/web/scalyr/tools/MarkdownMaker.java
 create mode 100644 ScalyrSite/src/web/scalyr/ui/OverageNotificationSettings.java
 create mode 100644 ScalyrSite/src/web/scalyr/ui/OverageNotificationThread.java
 create mode 100644 ScalyrSite/src/web/scalyr/ui/events/DashboardGraphsGenerator.java
 create mode 100644 ScalyrSite/src/web/scalyr/ui/events/GraphHelper.java
 delete mode 100644 ScalyrSite/src/web/scalyr/ui/pagehandlers/AlertPageHandler.java
 delete mode 100644 ScalyrSite/src/web/scalyr/ui/pagehandlers/AlertsPageHandler.java
 create mode 100644 ScalyrSite/src/web/scalyr/ui/pagehandlers/LogProcessingPageHandler.java
 create mode 100644 ScalyrSite/src/web/scalyr/ui/pagehandlers/LoginPageHandler.java
 create mode 100644 ScalyrSite/src/web/scalyr/ui/pagehandlers/MultiStepQueryPageHandler.java
 create mode 100644 ScalyrSite/src/web/scalyr/ui/pagehandlers/VerifyEmailPageHandler.java
 create mode 100644 ScalyrSite/test/com/scalyr/actors/ActorSessionTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/collections/ByteArrayToIntMapTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/collections/GarbageCollectableArenaTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/config/ConfigValueDumper.java
 create mode 100644 ScalyrSite/test/com/scalyr/config/api/scim/README.md
 create mode 100644 ScalyrSite/test/com/scalyr/config/api/scim/ScimConvertersTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/config/api/scim/ScimTestUtils.java
 create mode 100644 ScalyrSite/test/com/scalyr/config/api/scim/ScimUserAccountLinkerTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/config/api/scim/ScimUserManagementTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/core/KeyedKnobDoubleTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/core/KeyedKnobLongTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/core/LongRangesTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/core/SuccessGaugeTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/core/regex/SMatcherTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/io/ScalyrCipherInputStreamTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/parse/CodeTokenizerTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/QueryMasterScaleTests.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/GroupingTableRowKeyTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/GroupingTableRowMapTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/GroupingTableTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/CodeGeneratorTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/ComplexQueryCompilerTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/ComplexQueryParserTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/ExpressionNodeTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/GroupingPhaseSpecificationTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/compiler/QueryCommandTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/execution/ComplexQueryEngineTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/execution/ComplexQueryUIGlueTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/execution/LookupEngineTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/execution/UserDefinedLookupTableTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/functions/FunctionTestBase.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/functions/MiscellanousFunctionsTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/functions/NumericConversionsTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/functions/NumericFunctionsTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/functions/OnTheFlyParserTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/queryexec/complex/functions/StringFunctionsTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/server/ServerStatusTest.java
 create mode 100644 ScalyrSite/test/com/scalyr/tasks/DurableQueueManagerTestWithTimeChunk.java
 delete mode 100644 ScalyrSite/test/com/scalyr/tasks/HipChatApiTaskTest.java
 delete mode 100644 ScalyrSite/test/com/scalyr/tasks/HipChatV2ApiTaskTest.java
 create mode 100644 ScalyrSite/test/logs/api/ComplexQueryApiHandlerTest.java
 create mode 100644 ScalyrSite/test/logs/backend/UserActivityTest.java
 create mode 100644 ScalyrSite/test/logs/backend/events/TaggedTest.java
 create mode 100644 ScalyrSite/test/logs/backend/events/TestsUsingTagged.java
 create mode 100644 ScalyrSite/test/logs/backend/events/db/EventImporterTest.java
 create mode 100644 ScalyrSite/test/logs/backend/events/db/FreezerThreadTest.java
 create mode 100644 ScalyrSite/test/logs/backend/events/db/K8sEventTest.java
 create mode 100644 ScalyrSite/test/logs/backend/monitors/S3MessageProcessorTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/api/SessionInfoTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/api/db/DAOTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/api/db/ScrubbingRuleDAOTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/api/jdbi/JdbiConnectionWrapper.java
 create mode 100644 ScalyrSite/test/web/scalyr/api/jdbi/JdbiResultSetWrapper.java
 create mode 100644 ScalyrSite/test/web/scalyr/api/jersey/TestBinder.java
 create mode 100644 ScalyrSite/test/web/scalyr/api/resources/ApiTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/api/resources/ScrubbingRulesTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/ui/AuthUtilsTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/ui/EventViewWidgetTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/ui/OverageNotificationSettingsTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/ui/OverageNotificationThreadTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/ui/events/DashboardGraphsGeneratorTest.java
 delete mode 100644 ScalyrSite/test/web/scalyr/ui/pagehandlers/AlertPageHandlerTest.java
 delete mode 100644 ScalyrSite/test/web/scalyr/ui/pagehandlers/AlertsPageHandlerTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/ui/pagehandlers/BaseDashboardPageHandlerTest.java
 create mode 100644 ScalyrSite/test/web/scalyr/ui/pagehandlers/VerifyEmailPageHandlerTest.java
 create mode 100644 ScalyrSite2/WebRoot/src/img/chunked-search-page.png
 create mode 100644 ScalyrSite2/WebRoot/src/img/chunkedDashboard.png
 create mode 100644 ScalyrSite2/WebRoot/src/img/info.svg
 create mode 100644 ScalyrSite2/WebRoot/src/img/interactive-dashboard-sizing.png
 create mode 100644 ScalyrSite2/WebRoot/src/img/ranged-annotations.png
 create mode 100644 ScalyrSite2/WebRoot/src/img/resize-icon.svg
 create mode 100644 ScalyrSite2/WebRoot/src/img/search-error.svg
 create mode 100644 ScalyrSite2/WebRoot/src/img/search-ghost.svg
 create mode 100644 ScalyrSite2/WebRoot/src/img/search-info.svg
 create mode 100644 ScalyrSite2/WebRoot/src/img/search-warn.svg
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogScrubbing/slyLogScrubbing.html
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyLogScrubbing/slyLogScrubbing.js
 rename ScalyrSite2/WebRoot/src/js/scalyr/directives/{slyTokenizedSearch/chicletTemplate.less => slyLogScrubbing/slyLogScrubbing.less} (100%)
 delete mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/directives/slySearchBox/slySearchBox.html
 delete mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/directives/slySearchBox/slySearchBox.js
 delete mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/directives/slySearchBox/slySearchBox.less
 delete mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTokenizedSearch/chicletTemplate.html
 delete mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTokenizedSearch/slyTokenizedSearch.html
 delete mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTokenizedSearch/slyTokenizedSearch.js
 delete mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/directives/slyTokenizedSearch/slyTokenizedSearch.less
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/logProcessing/logProcessingPage.html
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/logProcessing/logProcessingPage.js
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/logProcessing/logProcessingPage.less
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/login/login.html
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/login/login.js
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/login/login.less
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/multiStepQuery/multiStepQueryPage.html
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/multiStepQuery/multiStepQueryPage.js
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/multiStepQuery/multiStepQueryPage.less
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/verifyEmail/verifyEmailPage.html
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/verifyEmail/verifyEmailPage.js
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/pages/verifyEmail/verifyEmailPage.less
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/services/chunkedDashboardRequestService.js
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/services/dashboardsService.js
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/services/graphChunkService.js
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/services/pageRequestService.js
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/services/performanceReporter.js
 create mode 100644 ScalyrSite2/WebRoot/src/js/scalyr/services/regexService.js
 create mode 100755 ScalyrSite2/WebRoot/src/js/thirdparty/moment-round/moment-round.js
 create mode 100644 ScalyrSite2/WebRoot/src/jstests/scalyr/services/regexServiceTest.js
 create mode 100644 ScalyrSite2/docker-compose.yml
 create mode 100644 ScalyrSite2/nginx.conf
 create mode 100644 annotations/Dockerfile
 create mode 100644 annotations/config/annotations_prod
 create mode 100644 annotations/config/annotations_prodeu
 create mode 100644 annotations/config/annotations_staging
 create mode 100644 annotations/src/main/java/com/scalyr/annotations/AuthenticationFilter.java
 create mode 100644 annotations/src/main/java/com/scalyr/annotations/ScalyrConfiguration.java
 create mode 100644 annotations/src/main/java/com/scalyr/annotations/utils/JsonUtils.java
 delete mode 100644 config/kitchiong
 delete mode 100644 config/seangarner
 delete mode 100644 config/snewman
 create mode 100644 docker/nginx/.gitignore
 create mode 100644 docker/nginx/Dockerfile
 create mode 100644 docker/nginx/SSL/localhost.crt
 create mode 100644 docker/nginx/SSL/localhost.key
 create mode 100644 docker/nginx/cert.conf
 create mode 100644 docker/nginx/conf.d/common.conf
 create mode 100644 docker/nginx/conf.d/localhost.conf
 create mode 100644 docker/nginx/conf.d/localhost.template
 create mode 100644 docker/nginx/conf.d/ssl.conf
 create mode 100644 docker/nginx/docker-compose.yml
 create mode 100644 docker/nginx/nginx.conf
 create mode 100644 docker/nginx/pom.xml
 create mode 100644 scripts/ansible/initialize_local_replica.yml
 create mode 100755 scripts/ansible/inventory/ec2-s3-eu.py
 create mode 100755 scripts/ansible/inventory/ec2-s3-us.py
 create mode 100644 scripts/ansible/inventory/eks
 create mode 100644 scripts/ansible/inventory/group_vars/eu_ipa
 create mode 100644 scripts/ansible/inventory/group_vars/infra_ipa
 create mode 100644 scripts/ansible/inventory/group_vars/ipa
 create mode 100644 scripts/ansible/inventory/group_vars/prod-front
 create mode 100644 scripts/ansible/inventory/group_vars/prod-log
 create mode 100644 scripts/ansible/inventory/group_vars/prod-log-ebs-replicas
 create mode 100644 scripts/ansible/inventory/group_vars/prod-queue
 create mode 100644 scripts/ansible/inventory/group_vars/prod-solomo
 create mode 100644 scripts/ansible/inventory/group_vars/prod-worker
 create mode 100644 scripts/ansible/inventory/group_vars/prodeu-front
 create mode 100644 scripts/ansible/inventory/group_vars/prodeu-log
 create mode 100644 scripts/ansible/inventory/group_vars/prodeu-log-ebs-replicas
 create mode 100644 scripts/ansible/inventory/group_vars/prodeu-queue
 create mode 100644 scripts/ansible/inventory/group_vars/prodeu-worker
 create mode 100644 scripts/ansible/inventory/group_vars/qatesting-front
 create mode 100644 scripts/ansible/inventory/group_vars/qatesting-log
 create mode 100644 scripts/ansible/inventory/group_vars/qatesting-queue
 create mode 100644 scripts/ansible/inventory/group_vars/staging-front
 create mode 100644 scripts/ansible/inventory/group_vars/staging-log
 create mode 100644 scripts/ansible/inventory/group_vars/staging-log-new
 create mode 100644 scripts/ansible/inventory/group_vars/staging-queue
 create mode 100644 scripts/ansible/inventory/group_vars/staging-worker
 create mode 100644 scripts/ansible/inventory/group_vars/stagingeu-front
 create mode 100644 scripts/ansible/inventory/group_vars/stagingeu-log
 create mode 100644 scripts/ansible/inventory/group_vars/stagingeu-queue
 create mode 100644 scripts/ansible/inventory/group_vars/stagingeu-worker
 create mode 100644 scripts/ansible/inventory/group_vars/us_ipa
 create mode 100644 scripts/ansible/inventory/host_vars/common-ipa-1
 create mode 100644 scripts/ansible/inventory/host_vars/common-ipa-2
 create mode 100644 scripts/ansible/inventory/host_vars/common-ipa-3
 create mode 100644 scripts/ansible/inventory/host_vars/commoneu-ipa-1
 create mode 100644 scripts/ansible/inventory/host_vars/commoneu-ipa-2
 create mode 100644 scripts/ansible/inventory/host_vars/commoneu-ipa-3
 create mode 100644 scripts/ansible/inventory/host_vars/infra-ipa-1
 create mode 100644 scripts/ansible/inventory/host_vars/infra-ipa-2
 create mode 100644 scripts/ansible/inventory/host_vars/newinfra-ipa-2
 create mode 100644 scripts/ansible/inventory/host_vars/prod-ipa-1
 create mode 100644 scripts/ansible/inventory/host_vars/prod-ipa-2
 create mode 100644 scripts/ansible/inventory/host_vars/prod-ipa-3
 create mode 100644 scripts/ansible/inventory/host_vars/prod-vpn-1
 create mode 100644 scripts/ansible/inventory/host_vars/prod-vpn-2
 create mode 100644 scripts/ansible/inventory/host_vars/prodeu-ipa-1
 create mode 100644 scripts/ansible/inventory/host_vars/prodeu-ipa-2
 create mode 100644 scripts/ansible/inventory/host_vars/prodeu-ipa-3
 create mode 100644 scripts/ansible/inventory/host_vars/staging-ipa-1
 create mode 100644 scripts/ansible/inventory/host_vars/staging-ipa-2
 create mode 100644 scripts/ansible/inventory/host_vars/staging-ipa-3
 create mode 100644 scripts/ansible/inventory/host_vars/stagingeu-ipa-1
 create mode 100644 scripts/ansible/inventory/host_vars/stagingeu-ipa-2
 create mode 100644 scripts/ansible/inventory/jenkins
 create mode 100644 scripts/ansible/inventory/vpn
 create mode 100644 scripts/ansible/resize_log_instance.yml
 create mode 100644 scripts/ansible/roles/manage_ec2_tags/tasks/main.yml
Sowmyas-MBP:scalyr sowmyaramani$ git log
commit ea4a8abd0f4f4270f8805dacbc59431bf6d2e0d4 (HEAD -> master, upstream/master)
Author: Janith <janithkv@gmail.com>
Date:   Tue May 7 13:02:43 2019 -0700

    API-109 . Slack logs should not show latest logs when logs are not present (#3051)

commit 730e2cff130e9dd52db744f4edf759f82ca7e152
Author: Bill Farner <bill@scalyr.com>
Date:   Tue May 7 11:41:03 2019 -0700

    Remove the old alerts pages (#3041)

commit f261c6c3d75ef406422fc76bd6ad593e462a2ea2
Author: Bill Farner <bill@scalyr.com>
Date:   Tue May 7 11:15:32 2019 -0700

    Use an account-keyed knob for query and graph chunk sizes (#3044)

commit 98342575e2a389a211aa2c90bb0d81bb56661e3c
Author: czerwingithub <czerwin@scalyr.com>
Date:   Tue May 7 10:14:51 2019 -0700

    Improve quality of frontend timings (#3046)
    
    Fixes two issues I've seen in the data:
    1.  Missing data about the time between when the getPageData request starts
        and when the data is returned.
    2.  Adds in information if there is a stop in the execution of the JavaScript
        engine.  It does seem like we are getting a lot of high latencies due to
        clients not receiving the response from the server in a timely way
        (such as if the browser is asleep).

commit 88bd9c8e5e67d30a663e2eae807929501fd8a6a8
Author: czerwingithub <czerwin@scalyr.com>
Date:   Tue May 7 09:39:08 2019 -0700

    Add additional page-level timing (#3026)
    
    Add in timing for the graphs and dashboard pages.

commit 23385d23db267c17b1a66d8199efb72b4fbc9f3c
Author: jeffscalyr <39502328+jeffscalyr@users.noreply.github.com>
Date:   Tue May 7 09:34:45 2019 -0700

    #FRONT-1229 Rename Logline Linking lab to SmartLinks (#3028)

commit 592fbc8d6a815d197d929ddd0108c56e2ff5985e
Author: czerwingithub <czerwin@scalyr.com>
Date:   Mon May 6 16:29:51 2019 -0700

    Fix issue with dev config (#3043)
    
    Fixing an issue in my dev config.
Sowmyas-MBP:scalyr sowmyaramani$ git status
On branch master
Your branch is ahead of 'origin/master' by 800 commits.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	ScalyrSite/scalyrrun.log

nothing added to commit but untracked files present (use "git add" to track)
Sowmyas-MBP:scalyr sowmyaramani$ ls
InternalTools			Jenkinsfile-shellcheck		ScalyrAgent			ScalyrTest			config				scripts
Jenkinsfile			Profiling			ScalyrSite			annotations			docker				spotbugs-security-include.xml
Jenkinsfile-deploy-docs		README.md			ScalyrSite2			checkstyle-suppressions.xml	pom.xml
Sowmyas-MBP:scalyr sowmyaramani$ ls -a
.				InternalTools			Profiling			ScalyrSite2			config				spotbugs-security-include.xml
..				Jenkinsfile			README.md			ScalyrTest			docker
.git				Jenkinsfile-deploy-docs		ScalyrAgent			annotations			pom.xml
.gitignore			Jenkinsfile-shellcheck		ScalyrSite			checkstyle-suppressions.xml	scripts
Sowmyas-MBP:scalyr sowmyaramani$ vi pom.xml
Sowmyas-MBP:scalyr sowmyaramani$ cd ScalyrSite2
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ ls
README.md		bootstrap-scalyr	gulpfile.babel.es6	karma.conf.js		node_modules		package.json		tsconfig.json
WebRoot			docker-compose.yml	gulpfile.babel.js	nginx.conf		package-lock.json	target			util
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ vi README.md 
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub/scalyr/ScalyrSite2
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ cd../..
-bash: cd../..: No such file or directory
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ ls
README.md		bootstrap-scalyr	gulpfile.babel.es6	karma.conf.js		node_modules		package.json		tsconfig.json
WebRoot			docker-compose.yml	gulpfile.babel.js	nginx.conf		package-lock.json	target			util
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ git status
On branch master
Your branch is ahead of 'origin/master' by 800 commits.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	../ScalyrSite/scalyrrun.log

nothing added to commit but untracked files present (use "git add" to track)
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub/scalyr/ScalyrSite2
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ history
  287  ls
  288  cd Documents
  289  ls
  290  cd GitHub
  291  ls
  292  cd sca
  293  cd scalyr/
  294  ls
  295  cd SCalySite2
  296  cd ScalyrSite2
  297  l
  298  ls
  299  cd WebRoot
  300  ls
  301  cd src/js
  302  ls
  303  cd scalyr
  304  ls
  305  cd pages
  306  ls
  307  cd searchLogs/
  308  ls
  309  vi searchLogsPage.js
  310  vi searchLogsPage.js
  311  grep -il updateDisoplaySettings *
  312  grep -il updateDisplaySettings *
  313  cd ..
  314  ls
  315  pwd
  316  cd ../dialogs
  317  ls
  318  grep -il updateDisplaySettings *
  319  ls
  320  pwd
  321  cd ..
  322  ls
  323  cd pages
  324  ls
  325  cd logOverview/
  326  ls
  327  vi logOverviewPage.js 
  328  cd ..
  329  ls
  330  cd searchLogs
  331  ls
  332  vi searchLogsPage.js
  333  cd configFiles
  334  ls
  335  cd ..
  336  ls
  337  cd configFiles/
  338  ls
  339  vi configFiles.js
  340  grep -i butterService
  341  grep -i butterService *
  342  history | grep gulp
  343  pwd
  344  cd../../../../..
  345  ls
  346  cd ..
  347  ls
  348  cd ..
  349  ls
  350  cd ..
  351  ls
  352  cd ..
  353  ls
  354  cd ..
  355  ls
  356  cd ..
  357  pwd
  358  cd ../ScalyrSite
  359  ls
  360  grep ScalyrSite2 pom.xml
  361  vi pom.xml
  362  vi pom.xml
  363  pwd
  364  cd ../ScalyrSite2
  365  ls
  366  vi gulpfile.babel.es6
  367  pwd
  368  ls
  369  find -name core
  370  find ./-name core
  371  find ./-name ScalySite2
  372  pwd
  373  cd ..
  374  find ./-name ScalySite2
  375  find ./-name ScalyrSite2
  376  find ./ -name ScalyrSite2
  377  find ./ -name core.ts
  378  vi ScalyrSite2/WebRoot/src/js/slang/core.ts
  379  pwd
  380  cd ScalyrSite2
  381  ls
  382  cd util
  383  ls
  384  ./parseURL.js 'https://logstaging.scalyr.com/events?barWidth=5%20minutes&color=%23d68c1e&color2=%23fd0000&color3=%23b542a0&endTime=1556728895606&facet=rate&facet2=rate&facet3=rate&filter=($status%20%3E%3D%20500%20$status%20%3C%20600)%20($serverHost%20contains%20%22prod-queue%22)&filter2=(($status%20%3E%3D%20500%20%26%26%20$status%20%3C%20600))%20($serverHost%20contains%20%22prod-log%22)%20($tag%20!%3D%20%22monitorResult%22)&filter3=($status%20%3E%3D%20500%20$status%20%3C%20600)%20($serverHost%20contains%20%22prod-front%22)&graphStyle=stacked_bar&label=Prod-Queue&label2=Prod-Log&label3=Prod-Front&mode=graph&numPlots=3&severity=0&severity2=0&severity3=0&startTime=1556714495607&teamToken=6Y50vk1fJluVCZ4jQS5kxA--'
  385  =
  386  pwd
  387  ls
  388  cd Documents/
  389  lks
  390  ls
  391  cd GitHub/
  392  ls
  393  cd scalyr/
  394  ls
  395  cd ScalyrSite2
  396  ls
  397  pwd
  398  ls
  399  cd util
  400  ls
  401  history
  402  ./parseURL.js 'https://logstaging.scalyr.com/events?filter=(tag%3D%27rateLimiterBucket%27%20%7C%7C%20tag%3D%27concurrencyLimiterBucket%27%20%7C%7C%20tag%3D%27valueLimiterBucket%27)%20!($key%20contains%20%22unfrozenEventsForAccount%2FAAAAAE9KObmtQN6u%22)%20!($key%20contains%20%22unfrozenEventsForAccount%2FAAAAAHJCzwPsA7gl%22)%20!($key%20contains%20%22unfrozenEventsForAccount%2FAAAAAG1YOLLxXZWv%22)%20!($key%20contains%20%22unfrozenEventsForAccount%2F%22)%20!(key%20contains%20%27query%27)%20!(key%20contains%20%27rate_limit_by_user%2Flogin%27)%20$key%20%3D%3D%20%22session_creation_by_user%2FAAAAAGQbk9epxfyd%22&mode=graph&graphStyle=line&color=%238EC8C6&teamToken=6Y50vk1fJluVCZ4jQS5kxA--&breakdownFacet=serverHost&startTime=1556721005790000000&style=detail&endTime=1556742605790355648&yScale=linear&facet=max(value)'
  403  ls
  404  cd Downloads/
  405  ls
  406  cd 
  407  ls
  408   cd Documents
  409  ls
  410  cd GitHub/
  411  ls
  412  cd scalyr/
  413  ls
  414  vi pom.xml
  415  ls
  416  cd ScalyrSite2
  417  cd ../ScalyrSite
  418  ls
  419  cd target
  420  ls
  421  cd ScalyrSite
  422  ls
  423  ls
  424  pwd
  425  ls
  426  cd s2
  427  ls
  428  pwd
  429  cd src
  430  ls
  431  cd js
  432  ls
  433  cd scalyr
  434  ls
  435  cd pages
  436  ls
  437  cd logOverview/
  438  ls
  439  pwd
  440  cd ../../../../..
  441  ls
  442  pwd
  443  cd ../..
  444  ls
  445  cd ScalyrSite/src/
  446  ls
  447  cd ..
  448  ls
  449  pwd
  450  cd src/com/
  451  ls
  452  cd scalyr/
  453  ls
  454  cd server
  455  ls
  456  vi DefaultServlet.java 
  457  pwd
  458  cd Git
  459  ls
  460  cd Documents/GitHub/
  461  ls
  462  cd scalyr/
  463  ls
  464  git log
  465  exit
  466  cd Documents/
  467  ls
  468  cd GitHub
  469  ls
  470  cd  scalyr/
  471  ls
  472  history | grep clone
  473  cd ..
  474  ls
  475  pwd
  476  history | grep clone
  477  git log
  478  cd scalyr/
  479  ls
  480  git log
  481  cd Documents/
  482  ls
  483  cd GitHub
  484  ls
  485  cd  scalyr/
  486  ls
  487  history | grep clone
  488  cd ..
  489  ls
  490  pwd
  491  history | grep clone
  492  git log
  493  cd scalyr/
  494  ls
  495  git log
  496  ls
  497  pwd
  498  git log
  499  !
  500  pwd
  501  pwd
  502  cd Documents/
  503  cd GitHub/
  504  ls
  505  cd scalyr/
  506  ls
  507  cd ..
  508  ls
  509  git clone http://github.com/sowmyaramani/qa.git
  510  git clone http://github.com/sowmyaramani/qa.git
  511  ls
  512  git remote add upstream https://github.com/scalyr/qa.git
  513  pwd
  514  git remote -v
  515  git remote add upstream https://github.com/scalyr/qa
  516  ls -a
  517  cd qa
  518  ls
  519  vi .git
  520  git remote add upstream https://github.com/scalyr/qa.git
  521  git remote -v
  522  git checkout -b QA-28
  523  ls
  524  ls bin
  525  ls bin/BAT
  526  ls bin/pom.xml
  527  vi pom.xml 
  528  ls
  529  git rm pom.xml
  530  git rm -r bin
  531  git rm -r src
  532  git rm -r target
  533  ls
  534  git rm -r test-output/
  535  ls
  536  vi testng.xml 
  537  git rm -r testng.xml 
  538  ls
  539  vi README.md
  540  vi README.md
  541  pwd
  542  cp README.md /Users/sowmyaramani/Documents/
  543  ls
  544  git revert
  545  man git revert
  546  vi README.md
  547  git branch
  548  vi README.md
  549  ls
  550  git fetch upstream
  551  git checkout master
  552  git merge upstream/master
  553  git checkout QA-28
  554  git rebase master
  555  git commit
  556  git fetch upstream
  557  git checkout master
  558  git merge upstream/master
  559  git checkout QA-28
  560  git rebase master
  561  git show
  562  ls
  563  git add README.md 
  564  git commit
  565  git rebase master
  566  git checkout
  567  git branch
  568  git rebase -i master
  569  ls
  570  git branch
  571  git checkout master
  572  ls
  573  git checkout QA-28
  574  git branch
  575  git push origin QA-28
  576  vi README.md 
  577  git commit
  578  git add README.md 
  579  git commit
  580  git fetch upstream
  581  git checkout master
  582  git merge upstream/master
  583  git checkout QA-28
  584  git rebase master
  585  git checkout
  586  git rebase -i master
  587  git branch
  588  git push origin QA-28
  589  git Sowmyas-MBP:qa sowmyaramani$ git checkout master
  590  Switched to branch 'master'
  591  Your branch is up to date with 'origin/master'.
  592  git revert
  593  git show
  594  !
  595  git show logs
  596  git log
  597  !
  598  :q!
  599  ls
  600  pwd
  601  git branch
  602  git checkout master
  603  git pull upstream master
  604  ls
  605  git branch
  606  git checkout QA-28
  607  git pull upstream master
  608  git show
  609  git revert
  610  git git checkout
  611  git checkout
  612  git diff
  613  vi README.md 
  614  git diff
  615  git rebase master
  616  git stash A
  617  history
  618  git branch
  619  git branch --help
  620  git push -f -d origin QA-28
  621  ls
  622  git branch
  623  git branch -m QA-28 QA-28-1
  624  git branch
  625  git show
  626  !
  627  vi README.md 
  628  git branch
  629  git add README.md 
  630  git commit
  631  cd .git
  632  ls
  633  ls -a
  634  vi config 
  635  vi config 
  636  git checkout
  637  cd ..
  638  ls
  639  git show
  640  git status
  641  git commit README.md 
  642  git push origin QA-28-1
  643  git pull upstream master
  644  git branch
  645  git checkout -b sowmyaramani-QA-28-1 master
  646  git pull https://github.com/sowmyaramani/qa.git QA-28-1
  647  git checkout master
  648  git merge --no-ff sowmyaramani-QA-28-1
  649  git push origin master
  650  ls-a
  651  ls -a
  652  vi README.md 
  653  cd ..
  654  ls
  655  git checkout master
  656  pwd
  657  cd qa
  658  ls
  659  git checkout master
  660  git push -delete QA-28-1
  661  git push --delete QA-28-1
  662  git push -delete origin QA-28-1
  663  git push --delete origin QA-28-1
  664  git branch
  665  git pull upstream master
  666  git branch
  667  vi .git
  668  vi .git
  669  vi .git
  670  git checkout
  671  git push origin master
  672  git checkout
  673  git show
  674  git branch
  675  git branch -d QA-28-1
  676  git branch -d sowmyaramani-QA-28-1
  677  ls
  678  vi README.md 
  679  git pull upstream master
  680  git checkout -b QA-28-2
  681  git checkout QA-28-2
  682  ls -a
  683  git rm .DS
  684  git rm .DS_Store 
  685  git rm .classpath 
  686  ls -al
  687  vi .project 
  688  vi .settings/
  689  git rm .settings/
  690  git rm -r .settings/
  691  git rm .project 
  692  ls -a
  693  vi README.md 
  694  git show
  695  vi README.md 
  696  git show
  697  git log
  698  ls
  699  vi README.md 
  700  git add README.md 
  701  git show
  702  git show:q!
  703  git log
  704  ls
  705  pwd
  706  ls
  707  vi README.md 
  708  vi README.md 
  709  vi README.md 
  710  vi README.md 
  711  git status
  712  vi README.md 
  713  git show
  714  git commit
  715  git remote -v
  716  git fetch upstream
  717  git checkout master
  718  git merge upstream/master
  719  git branch
  720  git checkout QA-28-2
  721  git rebase master
  722  git checkout -i master
  723  git rebase -i master
  724  more README.md 
  725  git log
  726  !
  727  ls
  728  vi README.md 
  729  git log
  730  git log
  731  !
  732  history
  733  git branch
  734  git push origin QA-28-2
  735  git branch
  736  git push --delete origin QA-28-2
  737  vi README.md 
  738  git branch -d QA-28-2
  739  git branch
  740  git checkout master
  741  git branch -d QA-28-2
  742  git branch -D QA-28-2
  743  ls
  744  git branch
  745  git fetch upstream
  746  ls
  747  git pull upstream/master
  748  vi .git
  749  git pull upstream master
  750  git push origin master
  751  git log
  752  ls
  753  pwd
  754  cd ../scalyr/
  755  ls
  756  git fetch origin
  757  git reset --hard origin/master
  758  git log
  759  !
  760  git show
  761  git branch
  762  git checkout
  763  ls
  764  cd ScalyrSite2
  765  git log
  766  git remote add upstream https://github.com/scalyr/scalyr
  767  cd ..
  768  ls
  769  pwd
  770  git fetch upstream
  771  git checkout master
  772  git merge upstream/master
  773  git log
  774  git status
  775  ls
  776  ls -a
  777  vi pom.xml
  778  cd ScalyrSite2
  779  ls
  780  vi README.md 
  781  pwd
  782  cd../..
  783  ls
  784  git status
  785  pwd
  786  history
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ ls -a
.			.tmp			bootstrap-scalyr	gulpfile.babel.js	node_modules		target
..			README.md		docker-compose.yml	karma.conf.js		package-lock.json	tsconfig.json
.babelrc		WebRoot			gulpfile.babel.es6	nginx.conf		package.json		util
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub/scalyr/ScalyrSite2
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ ls
README.md		bootstrap-scalyr	gulpfile.babel.es6	karma.conf.js		node_modules		package.json		tsconfig.json
WebRoot			docker-compose.yml	gulpfile.babel.js	nginx.conf		package-lock.json	target			util
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ cd ..
Sowmyas-MBP:scalyr sowmyaramani$ ls
InternalTools			Jenkinsfile-shellcheck		ScalyrAgent			ScalyrTest			config				scripts
Jenkinsfile			Profiling			ScalyrSite			annotations			docker				spotbugs-security-include.xml
Jenkinsfile-deploy-docs		README.md			ScalyrSite2			checkstyle-suppressions.xml	pom.xml
Sowmyas-MBP:scalyr sowmyaramani$ pwd
/Users/sowmyaramani/Documents/GitHub/scalyr
Sowmyas-MBP:scalyr sowmyaramani$ vi pom.xml
Sowmyas-MBP:scalyr sowmyaramani$ cd ScalyrSite2
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ ls
README.md		bootstrap-scalyr	gulpfile.babel.es6	karma.conf.js		node_modules		package.json		tsconfig.json
WebRoot			docker-compose.yml	gulpfile.babel.js	nginx.conf		package-lock.json	target			util
Sowmyas-MBP:ScalyrSite2 sowmyaramani$ cd WebRoot/
Sowmyas-MBP:WebRoot sowmyaramani$ ls
common	pages	src	styles
Sowmyas-MBP:WebRoot sowmyaramani$ cd src
Sowmyas-MBP:src sowmyaramani$ ls
fonts	img	js	jstests	styles
Sowmyas-MBP:src sowmyaramani$ cd js
Sowmyas-MBP:js sowmyaramani$ ls
scalyr		scalyrLoader.js	slang		thirdparty
Sowmyas-MBP:js sowmyaramani$ cd thirdparty/
Sowmyas-MBP:thirdparty sowmyaramani$ ls
angular			angular-hotkeys		babel			highcharts		moment			ng-tags-input
angular-highlightjs	angular-ui-bootstrap	codemirror		jquery			moment-round		ui-scroll
Sowmyas-MBP:thirdparty sowmyaramani$ cd ..
Sowmyas-MBP:js sowmyaramani$ ls
scalyr		scalyrLoader.js	slang		thirdparty
Sowmyas-MBP:js sowmyaramani$ cd scalyr
Sowmyas-MBP:scalyr sowmyaramani$ ls
controllers		directives		lib			partials		services		styles
dialogs			filters			pages			scalyrSiteAppNewUI.js	slyErrorMessagesDisplay
Sowmyas-MBP:scalyr sowmyaramani$ cd ../../..
Sowmyas-MBP:WebRoot sowmyaramani$ ls
common	pages	src	styles
Sowmyas-MBP:WebRoot sowmyaramani$ cd styles/
Sowmyas-MBP:styles sowmyaramani$ ls
bootstrap-scalyr	thirdparty
Sowmyas-MBP:styles sowmyaramani$ cd thirdparty/
Sowmyas-MBP:thirdparty sowmyaramani$ ls
less
Sowmyas-MBP:thirdparty sowmyaramani$ cd less
Sowmyas-MBP:less sowmyaramani$ ls
less.js		less.min.js
Sowmyas-MBP:less sowmyaramani$ vi less.js

/*!
 * Less - Leaner CSS v2.0.0-b3
 * http://lesscss.org
 *
 * Copyright (c) 2009-2014, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache v2 License.
 *
 */

 /** * @license Apache v2
 */

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.less=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var addDataAttr = require("./utils").addDataAttr,
    browser = require("./browser");

module.exports = function(window, options) {

    // use options from the current script tag data attribues
    addDataAttr(options, browser.currentScript(window));

    if (options.isFileProtocol === undefined) {
        options.isFileProtocol = /^(file|chrome(-extension)?|resource|qrc|app):/.test(window.location.protocol);
    }

    // Load styles asynchronously (default: false)
    //
    // This is set to `false` by default, so that the body
    // doesn't start loading before the stylesheets are parsed.
    // Setting this to `true` can result in flickering.
    //
    options.async = options.async || false;
    options.fileAsync = options.fileAsync || false;

    // Interval between watch polls
    options.poll = options.poll || (options.isFileProtocol ? 1000 : 1500);

    options.env = options.env || (window.location.hostname == '127.0.0.1' ||
        window.location.hostname == '0.0.0.0'   ||
        window.location.hostname == 'localhost' ||
        (window.location.port &&
            window.location.port.length > 0)      ||
        options.isFileProtocol                   ? 'development'
        : 'production');

    var dumpLineNumbers = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(window.location.hash);
    if (dumpLineNumbers) {
        options.dumpLineNumbers = dumpLineNumbers[1];
    }

"less.js" [noeol] 9407L, 327820C
