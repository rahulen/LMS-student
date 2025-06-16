export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} LearnHub Directory. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
