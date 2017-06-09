export function getCategoryNamesFromItems(items){
  return items.reduce((categories, item) => {
    if(!categories.some((c) => c == item.category)){
      // The category has not yet been added
      categories.push(item.category);
    }
    return categories;
  }, []);
}