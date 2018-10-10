export function dateFormat(d) {
	var splitedDate = d.split(".");
	const normalizedDate = new Date(
		splitedDate[1] + "." + splitedDate[0] + "." + splitedDate[2]
	);
	const months = ["Янв","Фев","Мар","Апр","Мая","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],
	      days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
	      month = normalizedDate.getMonth(),
          date = normalizedDate.getDate(),
          year = normalizedDate.getFullYear(),
          day = normalizedDate.getDay();

	return date + " " + months[month] + " " + year + ", " + days[day];
}

export function priceFormat(p) {
    return p.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? " " + c : c;
    });
}

export function declension(s) {
    var result,
        variants = ['пересадка','пересадки','пересадок'],
        count = s % 100;

    if (count >= 5 && count <= 20) {
        result = variants['2'];
    } else {
        count = count % 10;
        if (count === 1) {
            result = variants['0'];
        } else if (count >= 2 && count <= 4) {
            result = variants['1'];
        } else {
            result = variants['2'];
        }
    }
    return result;
}

export function stopsFormat(s) {
    switch (s) {
        case 0:
            return "";
        default:
            return s + " " + declension(s);

    }
}
