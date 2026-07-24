import os
from PIL import Image

src_path = '/home/shivam-likhar/Desktop/Projects/bodhibridal/frontend/src/assets/New-Logo-2.png'
dest_path = '/home/shivam-likhar/Desktop/Projects/bodhibridal/frontend/public/favicon.png'
dest_icon_path = '/home/shivam-likhar/Desktop/Projects/bodhibridal/frontend/public/favicon-icon.png'

if os.path.exists(src_path):
    img = Image.open(src_path)
    width, height = img.size
    print(f"Original size: {width}x{height}")
    
    # Bounding box of content or crop left ~25-30% where the icon is located
    # The logo has icon on left side. Let's find non-white/non-transparent bounding box for the left symbol.
    # Let's convert to RGBA
    img = img.convert("RGBA")
    
    # The icon is on the left. Let's crop x from 0 to about width * 0.25 (or bounding box of left icon)
    # Let's inspect pixels or crop the icon accurately:
    # Based on standard aspect ratio, height is 100%, icon width is around height * 1.1
    # Let's crop (0, 0, int(height * 1.2), height) first, then getbbox()
    icon_crop = img.crop((0, 0, int(width * 0.25), height))
    bbox = icon_crop.getbbox()
    if bbox:
        icon_final = icon_crop.crop(bbox)
        # Add a little padding (e.g. 5%) around it to make a nice square icon
        w, h = icon_final.size
        max_dim = max(w, h)
        square_img = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
        square_img.paste(icon_final, ((max_dim - w) // 2, (max_dim - h) // 2))
        
        square_img.save(dest_path)
        square_img.save(dest_icon_path)
        print(f"Saved cropped favicon icon to {dest_path} and {dest_icon_path} with size {square_img.size}")
    else:
        print("Bbox not found, saving crop")
        icon_crop.save(dest_path)
        icon_crop.save(dest_icon_path)
