use File::Slurp;
use Cwd;
use Data::Dumper;

my $dir = getcwd;
my %lookup = ();

my @folders = <*>;
foreach my $folder (@folders) {
	if ($folder =~ m/\./) { next; }
	chdir($folder);
	my @files = <*>;
	foreach my $file (@files) {
		if ($file =~ m/module\.ts/si) { next; }
		my $content = read_file($file);
		if ($content =~ m/\@IonicPage\((.*)\)/) {
			$lookup{$1}++;
		}

=pod
		my $page = ""; my $segment = "";
		if ($content =~ m/export class (\S+)Page/) {
			$page = $1;
			$segment = lcfirst($page);
			$segment =~ s/([A-Z])/-\L\1/gs;
			$string = "{ name: '$page', segment: '$segment' }";
			$content =~ s/\@IonicPage\(/\@IonicPage($string/;
			open out, ">$file";
			print out $content;
			close out;
		}
=cut
		
	}

	chdir($dir);
}

print Dumper \%lookup;