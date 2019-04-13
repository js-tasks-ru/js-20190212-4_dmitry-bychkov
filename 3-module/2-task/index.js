<<<<<<< HEAD
let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
	  let current = this.from;
	  let last = this.to;

	  return {
	    next() {
	      if (current <= last) {
	        current.setDate( current.getDate() + 1 );
	        
	        let day = current.getDay();
	        let date = current.getDate() < 10 ? `0${current.getDate()}` : current.getDate();
	        let val = (day > 0 && day < 6) ? `${date}` : `[${date}]`;
	        return {
	          done: false,
	          value: val
	        }
	      } else {
	        return {
	          done: true
	        }
	      }
	    }

	  }
};


=======
let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
};


>>>>>>> 32483304f2f33564235ac0ba938fc34992ae7719
