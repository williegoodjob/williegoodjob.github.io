function convertToGrams(value, unit) {
    switch (unit) {
      case "kg":
        return value * 1000;
      case "台斤":
        return value * 600;
      case "lb":
        return value * 453.592;
      case "oz":
        return value * 28.3495;
      default:
        return value;
    }
  }
  
  function convertFromGrams(grams, unit) {
    switch (unit) {
      case "kg":
        return grams / 1000;
      case "台斤":
        return grams / 600;
      case "lb":
        return grams / 453.592;
      case "oz":
        return grams / 28.3495;
      default:
        return grams;
    }
  }
  
  function update() {
    const price = parseFloat(document.getElementById("price").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const quantity = parseFloat(document.getElementById("quantity").value);
    const weightUnit = document.getElementById("WeightUnit").value;
    const baseline = parseFloat(document.getElementById("Baseline").value);
    const baselineUnit = document.getElementById("BaselineUnit").value;
    const weightPerQtyUnit = document.getElementById(
      "WeightPerQuantityUnit"
    ).value;
    const refPrice = parseFloat(document.getElementById("RefPrice").value);
  
    const pricePerBaselineEl = document.getElementById("PricePerBaseline");
    const pricePerBaselineLabel = document.getElementById(
      "PricePerBaselineLabel"
    );
    const weightPerQtyEl = document.getElementById("WeightPerQuantity");
    const pricePerQtyEl = document.getElementById("PricePerQuantity");
    const quantityPerPriceEl = document.getElementById("QuantiyPerPrice");
    const weightPerPriceEl = document.getElementById("WeightPerPrice");
    const weightPerPriceLabel = document.getElementById("WeightPerPriceLabel");
  
    // 價格 + 重量 → 計算每基準單位價格 + 每 N 元重量
    if (!isNaN(price) && !isNaN(weight) && weight > 0) {
      // 每基準單位價格
      if (!isNaN(baseline) && baseline > 0) {
        const weightInGrams = convertToGrams(weight, weightUnit);
        const baselineInGrams = convertToGrams(baseline, baselineUnit);
        const pricePerBaseline = price * (baselineInGrams / weightInGrams);
        pricePerBaselineEl.textContent = `${pricePerBaseline.toFixed(2)} 元`;
        pricePerBaselineLabel.textContent = `每 ${
          document.getElementById("BaselineUnit").selectedOptions[0].text
        } 價格`;
      } else {
        pricePerBaselineEl.textContent = "-- 元";
        pricePerBaselineLabel.textContent = "每基準單位價格";
      }
  
      // 每 N 元重量
      if (!isNaN(refPrice) && refPrice > 0) {
        const weightPerRefPrice = (weight / price) * refPrice;
        weightPerPriceLabel.textContent = `每 ${refPrice} 元 重量 數量`;
        weightPerPriceEl.textContent = `${convertFromGrams(
          convertToGrams(weightPerRefPrice, baselineUnit),
          baselineUnit
        ).toFixed(2)} ${baselineUnit}`;
      } else {
        weightPerPriceLabel.textContent = "每元重量";
        weightPerPriceEl.textContent = "--";
      }
    } else {
      pricePerBaselineEl.textContent = "-- 元";
      pricePerBaselineLabel.textContent = "每基準單位價格";
      weightPerPriceEl.textContent = "--";
      weightPerPriceLabel.textContent = "每元重量";
    }
  
    // 重量 + 數量 → 每單位重量
    if (!isNaN(weight) && !isNaN(quantity) && quantity > 0) {
      const weightPerQty = weight / quantity;
      weightPerQtyEl.textContent = `${convertFromGrams(
        convertToGrams(weightPerQty, weightUnit),
        weightPerQtyUnit
      ).toFixed(2)} `;
      quantityPerPriceEl.textContent = `${quantity*refPrice/price }個`;
    } else {
      weightPerQtyEl.textContent = "--";
    }
  
    // 價格 + 數量 → 每單位價格
    if (!isNaN(price) && !isNaN(quantity) && quantity > 0) {
      const pricePerQty = price / quantity;
      pricePerQtyEl.textContent = `${pricePerQty.toFixed(2)} 元`;
    } else {
      pricePerQtyEl.textContent = "-- 元";
    }
  }
  
  // 事件綁定
  [
    "price",
    "weight",
    "quantity",
    "WeightUnit",
    "Baseline",
    "BaselineUnit",
    "WeightPerQuantityUnit",
    "RefPrice",
  ].forEach((id) =>
    document.getElementById(id).addEventListener("input", update)
  );
  