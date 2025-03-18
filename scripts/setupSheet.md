# Google Sheets Setup Guide

## Basic Setup
1. Create a new Google Sheet
2. Import `locations.csv` (File > Import)
3. Name the sheet "Locations"
4. Freeze the first row (View > Freeze > 1 row)

## Column Formatting

### A. ID Column (A)
```
Data validation:
- Custom formula: =REGEXMATCH(A2, "^[0-9]+$")
- Error message: "ID must be a number"
```

### B. Name Column (B)
```
Data validation:
- Custom formula: =AND(LEN(B2)>=3, LEN(B2)<=100)
- Error message: "Name must be between 3 and 100 characters"
```

### C. Type Column (C)
```
Data validation:
- List of items: restaurant, place
- Error message: "Type must be either 'restaurant' or 'place'"
```

### D. Image Column (D)
```
Data validation:
- Custom formula: =REGEXMATCH(D2, "^https?://.*\.(jpg|jpeg|png|gif|webp)")
- Error message: "Must be a valid image URL"
```

### E. Rating Column (F)
```
Data validation:
- Number between: 0 and 5
- Error message: "Rating must be between 0 and 5"

Conditional formatting:
- Apply to range F2:F1000
- Format cells if: Custom formula is
=F2>=4.5 (Green background)
=AND(F2>=3.5,F2<4.5) (Yellow background)
=F2<3.5 (Red background)
```

### F. Price Level Column (L)
```
Data validation:
- Number between: 1 and 3
- Error message: "Price level must be between 1 and 3"

Conditional formatting:
- Apply to range L2:L1000
- Format cells if: Custom formula is
=L2=1 (Green background, "€")
=L2=2 (Yellow background, "€€")
=L2=3 (Orange background, "€€€")
```

### G. Baby Amenities Column (J)
```
Data validation:
- Custom formula: =AND(
  REGEXMATCH(J2, "^[a-z_]+(, [a-z_]+)*$"),
  NOT(REGEXMATCH(J2, ".*,.*(,.*){6,}")),
  ARRAYFORMULA(
    AND(
      IFERROR(
        REGEXMATCH(
          SPLIT(J2, ", "),
          "^(changing_table|high_chair|kids_menu|stroller_friendly|nursing_area|play_area|quiet_space)$"
        ),
        FALSE
      )
    )
  )
)
- Error message: "Must be valid comma-separated amenities"
```

### H. Coordinates (H & I)
```
Data validation for Latitude (H):
- Custom formula: =AND(H2>=-90, H2<=90)
- Error message: "Latitude must be between -90 and 90"

Data validation for Longitude (I):
- Custom formula: =AND(I2>=-180, I2<=180)
- Error message: "Longitude must be between -180 and 180"
```

### I. Opening Hours Column (M)
```
Data validation:
- Custom formula: =REGEXMATCH(M2, "^\{.*\}$")
- Error message: "Must be a valid JSON object"
```

## Helper Formulas

### Row Status (Add column N: Status)
```
Formula: =IF(AND(
  NOT(ISBLANK(A2:M2)),
  REGEXMATCH(A2, "^[0-9]+$"),
  LEN(B2)>=3,
  OR(C2="restaurant", C2="place"),
  REGEXMATCH(D2, "^https?://.*\.(jpg|jpeg|png|gif|webp)"),
  AND(F2>=0, F2<=5),
  AND(H2>=-90, H2<=90),
  AND(I2>=-180, I2<=180),
  AND(L2>=1, L2<=3),
  REGEXMATCH(M2, "^\{.*\}$")
), "✅ Valid", "❌ Invalid")
```

## Additional Features

1. Add data validation dropdown for amenities:
   - Create a new sheet called "Amenities"
   - Add all valid amenities in column A
   - Use this as source for a dropdown in the main sheet

2. Add a summary dashboard:
   - Total locations
   - Restaurants vs Places count
   - Average rating
   - Most common amenities
   - Locations by price level

Would you like me to create any of these additional features or focus on something else? 