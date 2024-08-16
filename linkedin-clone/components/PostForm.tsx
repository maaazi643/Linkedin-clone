"use client";

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ImageIcon } from "lucide-react";
import { useRef, useState } from "react";

function PostForm() {
  const ref = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user } = useUser();
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <form action="" ref={ref}>
        <div className=" flex items-center space-x-2">
          <Avatar>
            {user?.id ? (
              <AvatarImage src={user?.imageUrl} />
            ) : (
              <AvatarImage src="https://github.com/shadcn.png" />
            )}
            <AvatarFallback>
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <input
            type="text"
            name="postInput"
            placeholder="Start writing a post.."
            className="flex-1 outline-none rounded-full py-3 px-4 border"
          />

          <input
            ref={fileInputRef}
            type="file"
            name="image"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />

          <button type="submit" hidden>
            Post
          </button>
        </div>

        {/* Preview Conditional Check */}
        <div>
          <Button type="button" onClick={() => fileInputRef.current?.click()}>
            <ImageIcon className="mr-2" size={16} color="currentColor" />
            Add Image
          </Button>

          {/* Add a remove preview button */}
        </div>
      </form>
    </div>
  );
}

export default PostForm;
