buildrun: get-sudoku-lib
	docker build . -t docker-njs && docker run -p 80:80 -it docker-njs

get-sudoku-lib:
	mkdir src
	curl https://raw.githubusercontent.com/robatron/sudoku.js/master/sudoku.js > src/sudoku.js
	patch -u src/sudoku.js < sudoku.js.patch